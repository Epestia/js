<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Labo 7 : images</title>
</head>
<body>
    <?php 

    class Image {
        public string $name;
        public string $url;
        public string $description;

        public function __construct(string $name, string $url, string $description){
            $this->name = $name;
            $this->url = $url;
            $this->description = $description;

        }
    }

?>
    
</body>
</html>