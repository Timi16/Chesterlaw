$imageUrls = @{
    "images/legal-books.jpg" = "https://source.unsplash.com/random/800x600?law,books"
    "images/lawyer1.jpg" = "https://source.unsplash.com/random/600x800?lawyer,man,suit"
    "images/lawyer2.jpg" = "https://source.unsplash.com/random/600x800?lawyer,man,professional"
    "images/news1.jpg" = "https://source.unsplash.com/random/800x600?conference,business"
    "images/news2.jpg" = "https://source.unsplash.com/random/800x600?flag,ceremony"
    "images/news3.jpg" = "https://source.unsplash.com/random/800x600?business,forum"
    "images/recognition1.png" = "https://placehold.co/200x100/143d61/ffffff.png?text=Award+2025"
    "images/recognition2.png" = "https://placehold.co/200x100/143d61/ffffff.png?text=Best+Law+Firm"
    "images/recognition3.png" = "https://placehold.co/200x100/143d61/ffffff.png?text=Legal+500"
    "images/recognition4.png" = "https://placehold.co/200x100/143d61/ffffff.png?text=Chambers"
    "images/recognition5.png" = "https://placehold.co/200x100/143d61/ffffff.png?text=IFLR1000"
    "images/partner1.png" = "https://placehold.co/200x100/7c694a/ffffff.png?text=Partner+1"
    "images/partner2.png" = "https://placehold.co/200x100/7c694a/ffffff.png?text=Partner+2"
    "images/partner3.png" = "https://placehold.co/200x100/7c694a/ffffff.png?text=Partner+3"
    "images/partner4.png" = "https://placehold.co/200x100/7c694a/ffffff.png?text=Partner+4"
    "images/partner5.png" = "https://placehold.co/200x100/7c694a/ffffff.png?text=Partner+5"
}

foreach ($path in $imageUrls.Keys) {
    $url = $imageUrls[$path]
    $directory = Split-Path $path -Parent
    
    if (-not (Test-Path $directory)) {
        New-Item -ItemType Directory -Path $directory -Force
    }
    
    Write-Host "Downloading $url to $path"
    Invoke-WebRequest -Uri $url -OutFile $path
}
