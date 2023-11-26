<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Labo 7 : index</title>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
    <script src="./js/script.js"></script>
</head>
<body>
    <h1>Image gallery :</h1>
    <?php
        include_once 'Image.php';
        include 'ImageUploader.php';
        
        $uploadDir = 'uploads/';
        $imageUploader = new ImageUploader($uploadDir);
        $images = [];
        
        
        // Traitement du formulaire d'envoi d'image
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $newImage = $imageUploader->uploadImage($_POST['name'], $_POST['description'], $_FILES['userfile']);
        
            if ($newImage !== null) {
                $images[] = $newImage;
            } else {
                ?> <p>Erreur lors du téléversement du fichier </p> <?php
            }
        } ?>
    <div id="gallery">
        <?php foreach ($images as $image): ?>
            <div class="image-container">
                <h2><?= $image->name ?></h2>
                <img src="<?= $image->url ?>" alt="<?= $image->description ?>" width="300">
                <p><?= $image->description ?></p>
            </div>
        <?php endforeach; ?>
    </div>

    <h2>Ajouter une nouvelle image :</h2>
    <form enctype="multipart/form-data" action="<?= $_SERVER['PHP_SELF'] ?>" method="POST">
        <label for="name">Nom de l'image:</label>
        <input type="text" name="name" required><br>

        <label for="description">Description:</label>
        <textarea name="description" required></textarea><br>

        <label for="userfile">Fichier image:</label>
        <input type="file" name="userfile" accept="image/*" required><br>

        <input type="submit" value="Envoyer l'image">
    </form>

</body>
</html>