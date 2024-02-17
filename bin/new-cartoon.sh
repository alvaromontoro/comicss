#!/bin/bash

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

# calculate the number of folders + base
# that will be the next id (if base wasn't there, we'd need to add 1) 
id=$(ls ./comics | wc -l)
let id=id+0

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
# remove the last two rows
sed -i '' -e '$ d' ./js/data.js
sed -i '' -e '$ d' ./js/data.js
# add the new data information and the closing tags
echo "  },
  {
    id: ${id},
    uid: \"${uid}\",
    boxes: ${panels},
    title: \"${title}\",
    ariaLabel: \"${alt}\"" >> ./js/data.js
echo "  }
]" >> ./js/data.js

###################################################################
### add
echo "Adding to RSS files..."
#head --lines=-2 ./rss.xml

echo "Updating archive file..."