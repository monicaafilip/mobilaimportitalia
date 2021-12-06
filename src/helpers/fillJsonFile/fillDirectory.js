function fillDirectory(imageUrlsFile, jsonFile)
{
    var fs = require('fs');
    var imageUrls = fs.readFileSync(imageUrlsFile).toString().split("\n");

    var getTitle = false;
    var getUrl = false;

    var title = '';
    var id = 1;

    for (const url in imageUrls)
    {
        if(url === '!')
        {
            getTitle = true;
            getUrl = false;
        }
        else
        {
            if (getTitle)
            {
                getTitle = false;
                getUrl = true;
                title = url;
            }
            if (getUrl)
            {
                var obj = {
                    "id": id,
                    "title": title,
                    "imageUrl": url
                }
                console.log(obj);
                fs.writeFile(jsonFile, JSON.stringify(obj));
            }
        }
    }
}

fillDirectory("D:/projects/websites/mobilaimportitalia/src/helpers/fillJsonFile/imageUrls.txt", "D:/projects/websites/mobilaimportitalia/src/helpers/fillJsonFile/urls.json");

