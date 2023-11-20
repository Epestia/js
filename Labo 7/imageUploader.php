<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Labo 7 : imageUploader</title>
</head>
<body>
<?php 
    include_once 'Image.php';
    
    class ImageUploader {
        public string $uploadDir;

        public function __construct(string $uploadDir) {
            $this->uploadDir = realpath($uploadDir) . DIRECTORY_SEPARATOR;
        }

        public function uploadImage(string $name, string $description, array $file): ?Image {
            $uploadFile = $this->uploadDir . basename($file['name']);

            if (move_uploaded_file($file['tmp_name'], $uploadFile)) {
                return new Image($name, $uploadFile, $description);
            } else {
                return null; // Le téléversement a échoué
            }
        }
    }
?>

</body>
</html>