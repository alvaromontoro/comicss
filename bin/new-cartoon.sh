#!/bin/bash

## This file was intended to create singular comics quick
## It's not intended to be pretty
## It's not pretty
## It's ugly af
## ...but it does what I need...
## So please please please please please
## ignore how ugly it is and all the errors it may have

###################################################################
### read the variables needed to fill the new comic information
read -p "Enter the comic uid : " uid
read -p "Enter the comic title : " title
read -p "Enter the comic description (alt) : " alt
#read -p "Enter the comic publication date (yyyy-mm-dd) : " date
read -p "Enter the number of panels : " panels
read -p "Is it vertical ? (y/N) " vertical
vertical=${vertical:-n}
read -p "Is it horizontal ? (y/N) " horizontal
horizontal=${horizontal:-n}
read -p "YouTube Video ID ? (code/N) " video
video=${video:-n}

# calculate the number of folders + base
# that will be the next id (if base wasn't there, we'd need to add 1) 
id=$(ls ./comics | wc -l)
let id=id+0
let previousId=id-1
let nextId=id+1
let random1=$(jot -r 1 1 $id)
let random2=$(jot -r 1 1 $id)

###################################################################
### create the comic basic structure
echo "Creating comic $id..."
mkdir "./comics/$id"
echo "....folder $id created"

###################################################################
### generate the base html file
cp "./comics/base.html" "./comics/$id/$uid.html"
echo "....file $uid.html created"

###################################################################
### edit the data.js file
echo "Adding to data.js..."
# prepare variables for vertical, horizontal, and video
verticalJson=""
horizontalJson=""
videoJson=""
className=""
if [[ "$vertical" == 'y' ]]; then
  verticalJson="
    vertical: true,"
  className="vertical"
fi
if [[ "$horizontal" == 'y' ]]; then
  horizontalJson="
    horizontal: true,"
  className="horizontal"
fi
if [[ "$video" != 'n' ]]; then
  videoJson="
    video: \"${video}\","
fi
# remove the last row from data
sed -i '' -e '$ d' ./js/data.js
# add the new data information and the closing tags
echo "  {
    id: ${id},
    uid: \"${uid}\",
    boxes: ${panels},
    title: \"${title}\",${verticalJson}${horizontalJson}${videoJson}
    ariaLabel: \"${alt}\"
  },
]" >> ./js/data.js

###################################################################
### add the comic to both Atom and RSS feeds
echo "Adding to RSS files..."
# remove the last two rows in rss.xml
sed -i '' -e '$ d' ./rss.xml
sed -i '' -e '$ d' ./rss.xml
# add the latest comic to RSS feed
echo "    <item>
      <guid isPermaLink=\"true\">https://comicss.art/comics/${id}</guid>
      <title>${title}</title>
      <link>https://comicss.art/comics/${id}</link>
      <category>Comic strip</category>
      <description>A cartoon coded in CSS from comiCSS.</description>
      <pubDate>$(date "+%a, %d %b %Y") 00:00:00 +0000</pubDate>
      <enclosure url=\"https://comicss.art/comics/${id}/${uid}.png\" length=\"150000\" type=\"image/png\" />
      <author>alvaromontoro@gmail.com (Alvaro Montoro)</author>
    </item>
  </channel>
</rss>" >> ./rss.xml

# remove last line from Atom feed
sed -i '' -e '$ d' ./atom.xml
# add the latest comic to Atom feed
echo "  <entry>
    <title>${title}</title>
    <link href=\"https://comicss.art/comics/${id}\" />
    <link rel=\"alternate\" type=\"text/html\" href=\"https://comicss.art/comics/${id}/${uid}.html\"/>
    <id>https://comicss.art/comics/${id}</id>
    <updated>$(date +%Y-%m-%d)T00:00:00Z</updated>
    <summary>New Cartoon: ${title}</summary>
    <content type=\"xhtml\">
      <div xmlns=\"http://www.w3.org/1999/xhtml\">
        <p><img src=\"https://comicss.art/comics/${id}/${uid}.png\" alt=\"${alt}\" /></p>
      </div>
    </content>
    <rights>Copyright $(date +%Y) Alvaro Montoro</rights>
    <author>
      <name>Alvaro Montoro</name>
      <email>alvaromontoro@gmail.com</email>
      <uri>https://alvaromontoro.com</uri>
    </author>
  </entry>
</feed>" >> ./atom.xml

###################################################################
### add the comic to the archive
echo "Updating archive file..."
# remove the footer (source with some changes: https://stackoverflow.com/a/13383331/3695983)
sed -i '' -e :a -e '$d;N;2,11ba' -e 'P;D' ./archive/index.html
# add the latest comic + the footer
echo "          <tr>
            <td>${title}</td>
            <td><a href=\"/comics/${id}\">Comic<span> of ${title}</span></a></td>
            <td><a href=\"/comics/${id}/${uid}.html\">Demo<span> of ${title}</span></a></td>
          </tr>
        </tbody>
      </table>
    </main>

    <footer>
      Copyright &copy; 2021-$(date +%Y). <a href=\"https://alvaromontoro.com\" rel=\"author external\">Alvaro Montoro</a>
      &mdash; <a href=\"/atom.xml\">Atom Feed</a>
      &mdash; <a href=\"/rss.xml\">RSS Feed</a>
    </footer>
  </body>
</html>" >> ./archive/index.html

###################################################################
### Update the index page (first part)
echo "<!doctype html>
<html lang=\"en\">
  <head>
    <meta charset=\"utf-8\" />
    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">
    <meta name=\"author\" content=\"Alvaro Montoro (alvaromontoro@gmail.com)\" />
    <meta name=\"keywords\" content=\"comicss,webcomic,css,oc,humor,comic,cartoon,alvaro montoro,alvaro,montoro\" />
    <meta name=\"description\" content=\"comiCSS: A webcomic about CSS. Coded in CSS.\" />
    <meta name=\"theme-color\" content=\"#993399\" />

    <title>comiCSS</title>

    <meta property=\"og:title\" content=\"comiCSS\" />
    <meta property=\"og:type\" content=\"website\" />
    <meta property=\"og:url\" content=\"https://comicss.art\" />
    <meta property=\"og:image\" content=\"https://comicss.art/images/thumb.jpg\" />
    <meta property=\"og:description\" content=\"comiCSS: A webcomic about CSS. Coded in CSS.\" />
    <meta name=\"twitter:card\" content=\"summary_large_image\">
    <meta name=\"twitter:url\" content=\"http://comicss.art/\">
    <meta name=\"twitter:title\" content=\"comiCSS\">
    <meta name=\"twitter:description\" content=\"comiCSS: A webcomic about CSS. Coded in CSS.\">
    <meta name=\"twitter:image\" content=\"https://comicss.art/images/thumb.jpg\">
    <meta name=\"monetization\" content=\"\$ilp.uphold.com/raZZQiMDDWLe\" />

    <link rel=\"shortcut icon\" href=\"/favicon.png\" />

    <link rel="canonical" href="https://comicss.art" />

    <link rel=\"stylesheet\" href=\"/css/almond.lite.min.css\" />
    <link rel=\"stylesheet\" href=\"/css/styles.css\" />
  </head>
  <body class=\"home\">
    <a href=\"#main\" class=\"skip-link\">Skip to main content</a>
    <header>
      <div>
        <h2 class=\"page-title\"><a href=\"/\" rel=\"self\" aria-current=\"page\">comi<span>c</span><span>ss</span></a></h2>
        <p>A webcomic about CSS. Coded in CSS.</p>
      </div>
      <nav aria-label=\"primary\">
        <ul>
          <li>
            <a href=\"/archive/\" rel=\"archives\">
              <svg width=\"1em\" height=\"2em\" viewBox=\"0 0 100 100\" aria-hidden=\"true\">
                <path d=\"M12,30 5,30 5,5 95,5 95,30 88,30 88,95 12,95 12,30 88,30\" />
                <rect rx=\"3\" ry=\"3\" x=\"30\" width=\"40\" y=\"45\" height=\"15\" />
              </svg><span>Archive</span>
            </a>
          </li>
          <li>
            <a href=\"/blog/\">
              <svg width=\"1em\" height=\"2em\" viewBox=\"0 0 100 100\" aria-hidden=\"true\">
                <path d=\"M95,30 30,95 5,95 5,70 70,5Z M5,95 12,88 M45,95 55,95 M65,95 75,95 M85,95 95,95\" />
              </svg><span>Blog</span>
            </a>
          </li>
          <li>
            <a href=\"/about/\" rel=\"about\">
              <svg width=\"1em\" height=\"2em\" viewBox=\"0 0 100 100\" aria-hidden=\"true\">
                <path d=\"M50,40 C85,60 95,80 95,95 95,95 5,95 5,95 5,80 15,60 50,40Z\" />
                <circle cx=\"50\" cy=\"30\" r=\"25\" style=\"fill:#fff\" />
              </svg><span>About</span>
            </a>
          </li>
          <li>
            <a href=\"/contact/\">
              <svg width=\"1em\" height=\"2em\" viewBox=\"0 0 100 100\" aria-hidden=\"true\">
                <path d=\"M95,15 95,85 5,85 5,15 95,15 50,55 5,15Z\" />
              </svg><span>Contact</span>
            </a>
          </li>
          <li>
            <a href=\"https://twitter.com/comi_CSS\" rel=\"external author\">
              <svg width=\"1em\" height=\"2em\" viewBox=\"0 0 100 100\" aria-hidden=\"true\">
                <path d=\"M95,15 95,75 55,75 35,95 35,75 5,75 5,15Z\" stroke-linejoin=\"round\" />
              </svg><span>Twitter</span>
            </a>
          </li>
          <li>
            <a href=\"https://comicss.printify.me\" rel=\"external payment nofollow\">
              <svg width=\"1em\" height=\"2em\" viewBox=\"0 0 100 100\" aria-hidden=\"true\">
                <path d=\"M0,5 15,5 35,75 85,75 95,25 18,25\" stroke-linejoin=\"round\" />
                <circle cx=\"40\" cy=\"90\" r=\"10\" style=\"fill:currentColor; stroke-width: 0\" />
                <circle cx=\"80\" cy=\"90\" r=\"10\" style=\"fill:currentColor; stroke-width: 0\" />
              </svg><span>Store</span>
            </a>
          </li>
          <li>
            <a href=\"https://www.patreon.com/alvaromontoro\" rel=\"external payment\">
              <svg width=\"1em\" height=\"2em\" viewBox=\"0 0 100 100\" aria-hidden=\"true\">
                <path d=\"M9,0 9,100\" style=\"stroke-width:18\" />
                <circle cx=\"62\" cy=\"38\" r=\"38\" style=\"fill:currentColor; stroke-width: 0\" />
              </svg><span>Patreon</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
    <main id=\"main\" class=\"latest\">
      <noscript>
        This website needs JavaScript to navigate. But, you can see all the drawings linked at once 
        (without needing any JavaScript) in the <a href=\"/archive\">Archive</a>.
      </noscript>

      <h1>${title}</h1>

      <nav aria-label=\"Comic strip browsing\">
        <a href=\"/comics/1\" rel=\"first\">
          <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 100 100\" aria-hidden=\"true\">
            <path d=\"M10,0 10,100 M100,0 50,50 100,100\" />
          </svg>
          <span>First</span>
        </a>
        <a href=\"/comics/${previousId}\" rel=\"prev\">
          <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 100 100\" aria-hidden=\"true\">
            <path d=\"M75,0 25,50 75,100\" />
          </svg>
          <span>Previous</span>
        </a>
        <a class=\"random-post\" href=\"/comics/${random1}\">
          <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 100 100\" class=\"random\" aria-hidden=\"true\">
            <path class=\"random\" d=\"M100,25 80,2 80,48Z\" />
            <path class=\"random\" d=\"M100,75 80,98 80,52Z\" />
            <path d=\"M0,25 20,25 65,75 90,75 M0,75 20,75 65,25 95,25\" />
          </svg>
          <span>Random</span>
        </a>
        <a href=\"#\" rel=\"next\">
          <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 100 100\" aria-hidden=\"true\">
            <path d=\"M25,0 75,50 25,100\" />
          </svg>
          <span>Next</span>
        </a>
        <a href=\"/\" rel=\"last\">
          <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 100 100\" aria-hidden=\"true\">
            <path d=\"M90,0 90,100 M0,0 50,50 0,100\" />
          </svg>
          <span>Last</span>
        </a>
      </nav>

      <div id=\"comic-strip\" class=\"${className}\" role=\"img\" aria-label=\"${alt}\">" > ./index.html
# print the comics
for (( i = 0; i < panels; i++ )) ; {
  echo "        <img src=\"/comics/${id}/${id}-${uid}-${i}.webp\" alt=\"\" width=\"350\" />" >> ./index.html
}
# continue printing the page
echo "      </div>

      <nav aria-label=\"Comic strip browsing\">
        <a href=\"/comics/1\" rel=\"first\">
          <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 100 100\" aria-hidden=\"true\">
            <path d=\"M10,0 10,100 M100,0 50,50 100,100\" />
          </svg>
          <span>First</span>
        </a>
        <a href=\"/comics/${previousId}\" rel=\"prev\">
          <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 100 100\" aria-hidden=\"true\">
            <path d=\"M75,0 25,50 75,100\" />
          </svg>
          <span>Previous</span>
        </a>
        <a class=\"random-post\" href=\"/comics/${random2}\">
          <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 100 100\" class=\"random\" aria-hidden=\"true\">
            <path class=\"random\" d=\"M100,25 80,2 80,48Z\" />
            <path class=\"random\" d=\"M100,75 80,98 80,52Z\" />
            <path d=\"M0,25 20,25 65,75 90,75 M0,75 20,75 65,25 95,25\" />
          </svg>
          <span>Random</span>
        </a>
        <a href=\"#\" rel=\"next\">
          <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 100 100\" aria-hidden=\"true\">
            <path d=\"M25,0 75,50 25,100\" />
          </svg>
          <span>Next</span>
        </a>
        <a href=\"/\" rel=\"last\">
          <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 100 100\" aria-hidden=\"true\">
            <path d=\"M90,0 90,100 M0,0 50,50 0,100\" />
          </svg>
          <span>Last</span>
        </a>
      </nav>

      <p>Permalink: <a aria-label=\"permalink\" id=\"permanent-link\" href=\"/comics/${id}\">https://comicss.art/comics/${id}</a></p>
      <p>Image link: <a aria-label=\"image link\" id=\"image-link\" href=\"/comics/${id}/${uid}.png\">https://comicss.art/comics/${id}/${uid}.png</a></p>
      <p>Source code: <a aria-label=\"html version\" id=\"code-link\" href=\"/comics/${id}/${uid}.html\" rel=\"alternate\">https://comicss.art/comics/${id}/${uid}.html</a></p>

      <hr />
      <p>This work is licensed under a <a href=\"https://creativecommons.org/licenses/by-nc/4.0/\" rel=\"license external noreferrer nofollow\">Creative Commons Attribution-NonCommercial 4.0 License</a>.</p>
      <p>You are free to copy and share these comics, but not to sell them. <a href=\"/license\" rel=\"license\">More details on the license and use rights</a>.</p>
      <hr />
    </main>
    <nav class=\"thumbs-nav\" aria-label=\"trending comics\">
      <ul>
        <li><a href=\"/comics/2\"><img width=\"80\" height=\"80\" loading=\"lazy\" decoding=\"async\" src=\"/images/thumbs/mini-2.webp\" alt=\"\" /><span class=\"a11y-hidden\">Comic 2</span></a></li>
        <li><a href=\"/comics/46\"><img width=\"80\" height=\"80\" loading=\"lazy\" decoding=\"async\" src=\"/images/thumbs/mini-46.webp\" alt=\"\" /><span class=\"a11y-hidden\">Comic 46</span></a></li>
        <li><a href=\"/comics/16\"><img width=\"80\" height=\"80\" loading=\"lazy\" decoding=\"async\" src=\"/images/thumbs/mini-16.webp\" alt=\"\" /><span class=\"a11y-hidden\">Comic 16</span></a></li>
        <li><a href=\"/comics/48\"><img width=\"80\" height=\"80\" loading=\"lazy\" decoding=\"async\" src=\"/images/thumbs/mini-48.webp\" alt=\"\" /><span class=\"a11y-hidden\">Comic 48</span></a></li>
        <li><a href=\"/comics/29\"><img width=\"80\" height=\"80\" loading=\"lazy\" decoding=\"async\" src=\"/images/thumbs/mini-29.webp\" alt=\"\" /><span class=\"a11y-hidden\">Comic 29</span></a></li>
        <li><a href=\"/comics/32\"><img width=\"80\" height=\"80\" loading=\"lazy\" decoding=\"async\" src=\"/images/thumbs/mini-32.webp\" alt=\"\" /><span class=\"a11y-hidden\">Comic 32</span></a></li>
        <li><a href=\"/comics/39\"><img width=\"80\" height=\"80\" loading=\"lazy\" decoding=\"async\" src=\"/images/thumbs/mini-39.webp\" alt=\"\" /><span class=\"a11y-hidden\">Comic 39</span></a></li>
        <li><a href=\"/comics/50\"><img width=\"80\" height=\"80\" loading=\"lazy\" decoding=\"async\" src=\"/images/thumbs/mini-50.webp\" alt=\"\" /><span class=\"a11y-hidden\">Comic 50</span></a></li>
        <li><a href=\"/comics/51\"><img width=\"80\" height=\"80\" loading=\"lazy\" decoding=\"async\" src=\"/images/thumbs/mini-51.webp\" alt=\"\" /><span class=\"a11y-hidden\">Comic 51</span></a></li>
        <li><a href=\"/comics/59\"><img width=\"80\" height=\"80\" loading=\"lazy\" decoding=\"async\" src=\"/images/thumbs/mini-59.webp\" alt=\"\" /><span class=\"a11y-hidden\">Comic 59</span></a></li>
        <li><a href=\"/comics/67\"><img width=\"80\" height=\"80\" loading=\"lazy\" decoding=\"async\" src=\"/images/thumbs/mini-67.webp\" alt=\"\" /><span class=\"a11y-hidden\">Comic 67</span></a></li>
        <li><a href=\"/comics/78\"><img width=\"80\" height=\"80\" loading=\"lazy\" decoding=\"async\" src=\"/images/thumbs/mini-78.webp\" alt=\"\" /><span class=\"a11y-hidden\">Comic 78</span></a></li>
        <li><a href=\"/comics/80\"><img width=\"80\" height=\"80\" loading=\"lazy\" decoding=\"async\" src=\"/images/thumbs/mini-80.webp\" alt=\"\" /><span class=\"a11y-hidden\">Comic 80</span></a></li>
      </ul>
    </nav>

    <footer>
      Copyright &copy; 2021-$(date +%Y). <a href=\"https://alvaromontoro.com\" rel=\"author external\">Alvaro Montoro</a>
      &mdash; <a href=\"/atom.xml\">Atom Feed</a>
      &mdash; <a href=\"/rss.xml\">RSS Feed</a>
      <hr />
      <nav aria-labelledby=\"webring\" class=\"full\">
        <h2 id=\"webring\">CSS JOY Webring</h2>
        <a href=\"https://webri.ng/webring/cssjoy/previous?via=https://comicss.art\">Previous</a>
        <a href=\"https://webri.ng/webring/cssjoy/random?via=https://comicss.art\">Random</a>
        <a href=\"https://webri.ng/webring/cssjoy/next?via=https://comicss.art\">Next</a>
      </nav>
    </footer>

    <script>let postId = 0;</script>
    <script src=\"/js/data.js?last-updated=$(date +%Y-%m-%d)\"></script>
    <script src=\"/js/code.js\"></script>
  </body>
</html>" >> ./index.html

###################################################################
### Update the comic page (first part)
echo "<!doctype html>
<html lang=\"en\">
  <head>
    <meta charset=\"utf-8\" />
    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">
    <meta name=\"author\" content=\"Alvaro Montoro (alvaromontoro@gmail.com)\" />
    <meta name=\"keywords\" content=\"comicss,webcomic,css,oc,humor,comic,cartoon,alvaro montoro,alvaro,montoro\" />
    <meta name=\"description\" content=\"comiCSS: A webcomic about CSS. Coded in CSS.\" />
    <meta name=\"theme-color\" content=\"#993399\" />

    <title>comiCSS #${id}: ${title}</title>

    <meta property=\"og:title\" content=\"comiCSS #${id}: ${title}\" />
    <meta property=\"og:type\" content=\"website\" />
    <meta property=\"og:url\" content=\"https://comicss.art/comics/${id}\" />
    <meta property=\"og:image\" content=\"https://comicss.art/comics/${id}/thumb.png\" />
    <meta property=\"og:description\" content=\"${alt}\" />
    <meta name=\"twitter:card\" content=\"summary_large_image\">
    <meta name=\"twitter:url\" content=\"https://comicss.art/comics/${id}\">
    <meta name=\"twitter:title\" content=\"comiCSS #${id}: ${title}\">
    <meta name=\"twitter:description\" content=\"${alt}\">
    <meta name=\"twitter:image\" content=\"https://comicss.art/comics/${id}/thumb.png\">
    <meta name=\"monetization\" content=\"\$ilp.uphold.com/raZZQiMDDWLe\" />

    <link rel=\"shortcut icon\" href=\"/favicon.png\" />

    <link rel=\"canonical\" href=\"https://comicss.art/comics/${id}\" />

    <link rel=\"stylesheet\" href=\"/css/almond.lite.min.css\" />
    <link rel=\"stylesheet\" href=\"/css/styles.css\" />
  </head>
  <body class=\"home\">
    <a href=\"#main\" class=\"skip-link\">Skip to main content</a>
    <header>
      <div>
        <h2 class=\"page-title\"><a href=\"/\" rel=\"self\" aria-current=\"page\">comi<span>c</span><span>ss</span></a></h2>
        <p>A webcomic about CSS. Coded in CSS.</p>
      </div>
      <nav aria-label=\"primary\">
        <ul>
          <li>
            <a href=\"/archive/\" rel=\"archives\">
              <svg width=\"1em\" height=\"2em\" viewBox=\"0 0 100 100\" aria-hidden=\"true\">
                <path d=\"M12,30 5,30 5,5 95,5 95,30 88,30 88,95 12,95 12,30 88,30\" />
                <rect rx=\"3\" ry=\"3\" x=\"30\" width=\"40\" y=\"45\" height=\"15\" />
              </svg><span>Archive</span>
            </a>
          </li>
          <li>
            <a href=\"/blog/\">
              <svg width=\"1em\" height=\"2em\" viewBox=\"0 0 100 100\" aria-hidden=\"true\">
                <path d=\"M95,30 30,95 5,95 5,70 70,5Z M5,95 12,88 M45,95 55,95 M65,95 75,95 M85,95 95,95\" />
              </svg><span>Blog</span>
            </a>
          </li>
          <li>
            <a href=\"/about/\" rel=\"about\">
              <svg width=\"1em\" height=\"2em\" viewBox=\"0 0 100 100\" aria-hidden=\"true\">
                <path d=\"M50,40 C85,60 95,80 95,95 95,95 5,95 5,95 5,80 15,60 50,40Z\" />
                <circle cx=\"50\" cy=\"30\" r=\"25\" style=\"fill:#fff\" />
              </svg><span>About</span>
            </a>
          </li>
          <li>
            <a href=\"/contact/\">
              <svg width=\"1em\" height=\"2em\" viewBox=\"0 0 100 100\" aria-hidden=\"true\">
                <path d=\"M95,15 95,85 5,85 5,15 95,15 50,55 5,15Z\" />
              </svg><span>Contact</span>
            </a>
          </li>
          <li>
            <a href=\"https://twitter.com/comi_CSS\" rel=\"external author\">
              <svg width=\"1em\" height=\"2em\" viewBox=\"0 0 100 100\" aria-hidden=\"true\">
                <path d=\"M95,15 95,75 55,75 35,95 35,75 5,75 5,15Z\" stroke-linejoin=\"round\" />
              </svg><span>Twitter</span>
            </a>
          </li>
          <li>
            <a href=\"https://comicss.printify.me\" rel=\"external payment nofollow\">
              <svg width=\"1em\" height=\"2em\" viewBox=\"0 0 100 100\" aria-hidden=\"true\">
                <path d=\"M0,5 15,5 35,75 85,75 95,25 18,25\" stroke-linejoin=\"round\" />
                <circle cx=\"40\" cy=\"90\" r=\"10\" style=\"fill:currentColor; stroke-width: 0\" />
                <circle cx=\"80\" cy=\"90\" r=\"10\" style=\"fill:currentColor; stroke-width: 0\" />
              </svg><span>Store</span>
            </a>
          </li>
          <li>
            <a href=\"https://www.patreon.com/alvaromontoro\" rel=\"external payment\">
              <svg width=\"1em\" height=\"2em\" viewBox=\"0 0 100 100\" aria-hidden=\"true\">
                <path d=\"M9,0 9,100\" style=\"stroke-width:18\" />
                <circle cx=\"62\" cy=\"38\" r=\"38\" style=\"fill:currentColor; stroke-width: 0\" />
              </svg><span>Patreon</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
    <main id=\"main\">
      <noscript>
        This website needs JavaScript to navigate. But, you can see all the drawings linked at once 
        (without needing any JavaScript) in the <a href=\"/archive\">Archive</a>.
      </noscript>

      <h1>${title}</h1>

      <nav aria-label=\"Comic strip browsing\">
        <a href=\"/comics/1\" rel=\"first\">
          <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 100 100\" aria-hidden=\"true\">
            <path d=\"M10,0 10,100 M100,0 50,50 100,100\" />
          </svg>
          <span>First</span>
        </a>
        <a href=\"/comics/${previousId}\" rel=\"prev\">
          <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 100 100\" aria-hidden=\"true\">
            <path d=\"M75,0 25,50 75,100\" />
          </svg>
          <span>Previous</span>
        </a>
        <a class=\"random-post\" href=\"/comics/${random1}\">
          <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 100 100\" class=\"random\" aria-hidden=\"true\">
            <path class=\"random\" d=\"M100,25 80,2 80,48Z\" />
            <path class=\"random\" d=\"M100,75 80,98 80,52Z\" />
            <path d=\"M0,25 20,25 65,75 90,75 M0,75 20,75 65,25 95,25\" />
          </svg>
          <span>Random</span>
        </a>
        <a href=\"/comics/${nextId}\" rel=\"next\">
          <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 100 100\" aria-hidden=\"true\">
            <path d=\"M25,0 75,50 25,100\" />
          </svg>
          <span>Next</span>
        </a>
        <a href=\"/\" rel=\"last\">
          <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 100 100\" aria-hidden=\"true\">
            <path d=\"M90,0 90,100 M0,0 50,50 0,100\" />
          </svg>
          <span>Last</span>
        </a>
      </nav>

      <div id=\"comic-strip\" role=\"img\" class=\"${className}\" aria-label=\"${alt}\">" > "./comics/${id}/index.html"
# print the comics
for (( i = 0; i < panels; i++ )) ; {
  echo "        <img src=\"/comics/${id}/${id}-${uid}-${i}.webp\" alt=\"\" width=\"350\" />" >> "./comics/${id}/index.html"
}
# continue printing the comic page
echo "      </div>

      <nav aria-label=\"Comic strip browsing\">
        <a href=\"/comics/1\" rel=\"first\">
          <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 100 100\" aria-hidden=\"true\">
            <path d=\"M10,0 10,100 M100,0 50,50 100,100\" />
          </svg>
          <span>First</span>
        </a>
        <a href=\"/comics/${previousId}\" rel=\"prev\">
          <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 100 100\" aria-hidden=\"true\">
            <path d=\"M75,0 25,50 75,100\" />
          </svg>
          <span>Previous</span>
        </a>
        <a class=\"random-post\" href=\"/comics/${random2}\">
          <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 100 100\" class=\"random\" aria-hidden=\"true\">
            <path class=\"random\" d=\"M100,25 80,2 80,48Z\" />
            <path class=\"random\" d=\"M100,75 80,98 80,52Z\" />
            <path d=\"M0,25 20,25 65,75 90,75 M0,75 20,75 65,25 95,25\" />
          </svg>
          <span>Random</span>
        </a>
        <a href=\"/comics/${nextId}\" rel=\"next\">
          <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 100 100\" aria-hidden=\"true\">
            <path d=\"M25,0 75,50 25,100\" />
          </svg>
          <span>Next</span>
        </a>
        <a href=\"/\" rel=\"last\">
          <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 100 100\" aria-hidden=\"true\">
            <path d=\"M90,0 90,100 M0,0 50,50 0,100\" />
          </svg>
          <span>Last</span>
        </a>
      </nav>

      <p>Permalink: <a aria-label=\"permanet link\" id=\"permanent-link\" href=\"/comics/${id}\">https://comicss.art/comics/${id}</a></p>
      <p>Image link: <a aria-label=\"image version\" id=\"image-link\" href=\"/comics/${id}/${uid}.png\">https://comicss.art/comics/${id}/${uid}.png</a></p>
      <p>Source code: <a aria-label=\"html version\" id=\"code-link\" href=\"/comics/${id}/${uid}.html\" rel=\"alternate\">https://comicss.art/comics/${id}/${uid}.html</a></p>

      <hr />
      <p>This work is licensed under a <a href=\"https://creativecommons.org/licenses/by-nc/4.0/\" rel=\"license external noreferrer nofollow\">Creative Commons Attribution-NonCommercial 4.0 License</a>.</p>
      <p>You are free to copy and share these comics, but not to sell them. <a href=\"/license\" rel=\"license\">More details on the license and use rights</a>.</p>
      <hr />
    </main>
    <nav class=\"thumbs-nav\" aria-label=\"trending comics\">
      <ul>
        <li><a href=\"/comics/2\"><img width=\"80\" height=\"80\" loading=\"lazy\" decoding=\"async\" src=\"/images/thumbs/mini-2.webp\" alt=\"\" /><span class=\"a11y-hidden\">Comic 2</span></a></li>
        <li><a href=\"/comics/46\"><img width=\"80\" height=\"80\" loading=\"lazy\" decoding=\"async\" src=\"/images/thumbs/mini-46.webp\" alt=\"\" /><span class=\"a11y-hidden\">Comic 46</span></a></li>
        <li><a href=\"/comics/16\"><img width=\"80\" height=\"80\" loading=\"lazy\" decoding=\"async\" src=\"/images/thumbs/mini-16.webp\" alt=\"\" /><span class=\"a11y-hidden\">Comic 16</span></a></li>
        <li><a href=\"/comics/48\"><img width=\"80\" height=\"80\" loading=\"lazy\" decoding=\"async\" src=\"/images/thumbs/mini-48.webp\" alt=\"\" /><span class=\"a11y-hidden\">Comic 48</span></a></li>
        <li><a href=\"/comics/29\"><img width=\"80\" height=\"80\" loading=\"lazy\" decoding=\"async\" src=\"/images/thumbs/mini-29.webp\" alt=\"\" /><span class=\"a11y-hidden\">Comic 29</span></a></li>
        <li><a href=\"/comics/32\"><img width=\"80\" height=\"80\" loading=\"lazy\" decoding=\"async\" src=\"/images/thumbs/mini-32.webp\" alt=\"\" /><span class=\"a11y-hidden\">Comic 32</span></a></li>
        <li><a href=\"/comics/39\"><img width=\"80\" height=\"80\" loading=\"lazy\" decoding=\"async\" src=\"/images/thumbs/mini-39.webp\" alt=\"\" /><span class=\"a11y-hidden\">Comic 39</span></a></li>
        <li><a href=\"/comics/50\"><img width=\"80\" height=\"80\" loading=\"lazy\" decoding=\"async\" src=\"/images/thumbs/mini-50.webp\" alt=\"\" /><span class=\"a11y-hidden\">Comic 50</span></a></li>
        <li><a href=\"/comics/51\"><img width=\"80\" height=\"80\" loading=\"lazy\" decoding=\"async\" src=\"/images/thumbs/mini-51.webp\" alt=\"\" /><span class=\"a11y-hidden\">Comic 51</span></a></li>
        <li><a href=\"/comics/59\"><img width=\"80\" height=\"80\" loading=\"lazy\" decoding=\"async\" src=\"/images/thumbs/mini-59.webp\" alt=\"\" /><span class=\"a11y-hidden\">Comic 59</span></a></li>
        <li><a href=\"/comics/67\"><img width=\"80\" height=\"80\" loading=\"lazy\" decoding=\"async\" src=\"/images/thumbs/mini-67.webp\" alt=\"\" /><span class=\"a11y-hidden\">Comic 67</span></a></li>
        <li><a href=\"/comics/78\"><img width=\"80\" height=\"80\" loading=\"lazy\" decoding=\"async\" src=\"/images/thumbs/mini-78.webp\" alt=\"\" /><span class=\"a11y-hidden\">Comic 78</span></a></li>
        <li><a href=\"/comics/80\"><img width=\"80\" height=\"80\" loading=\"lazy\" decoding=\"async\" src=\"/images/thumbs/mini-80.webp\" alt=\"\" /><span class=\"a11y-hidden\">Comic 80</span></a></li>
      </ul>
    </nav>

    <footer>
      Copyright &copy; 2021-$(date +%Y). <a href=\"https://alvaromontoro.com\" rel=\"author external\">Alvaro Montoro</a>
      &mdash; <a href=\"/atom.xml\">Atom Feed</a>
      &mdash; <a href=\"/rss.xml\">RSS Feed</a>
      <hr />
      <nav aria-labelledby=\"webring\" class=\"full\">
        <h2 id=\"webring\">CSS JOY Webring</h2>
        <a href=\"https://webri.ng/webring/cssjoy/previous?via=https://comicss.art\">Previous</a>
        <a href=\"https://webri.ng/webring/cssjoy/random?via=https://comicss.art\">Random</a>
        <a href=\"https://webri.ng/webring/cssjoy/next?via=https://comicss.art\">Next</a>
      </nav>
    </footer>

    <script>let postId = ${id};</script>
    <script src=\"/js/data.js?\"></script>
    <script src=\"/js/code.js\"></script>
  </body>
</html>" >> "./comics/${id}/index.html"
