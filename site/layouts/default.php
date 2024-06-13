<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <?= vite()->css('js/index.js') ?>
    <?= vite()->js('js/index.js', ['defer' => true]) ?>
</head>

<body>
    <?= $slot ?>
</body>

</html>