$imageUrls = @{
    # Recognition logos
    "images/chambers.png" = "https://placehold.co/320x80/1C352D/ffffff?text=Chambers+and+Partners"
    "images/legal500.png" = "https://placehold.co/320x80/1C352D/ffffff?text=Legal+500"
    "images/iflr1000.png" = "https://placehold.co/320x80/1C352D/ffffff?text=IFLR1000"
    "images/bestlawyers.png" = "https://placehold.co/320x80/1C352D/ffffff?text=Best+Lawyers"
    "images/whoswho.png" = "https://placehold.co/320x80/1C352D/ffffff?text=Who's+Who+Legal"
    
    # Other images
    "images/legal-books.jpg" = "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&q=80"
    "images/lawyer1.jpg" = "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&h=800&q=80"
    "images/lawyer2.jpg" = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&q=80"
    "images/news1.jpg" = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&q=80"
    "images/news2.jpg" = "https://placehold.co/800x600/1C352D/ffffff?text=Corporate+Law+Changes"
    "images/news3.jpg" = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&q=80"
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
