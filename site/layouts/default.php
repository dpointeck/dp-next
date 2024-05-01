<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <?= vite()->css('ts/index.ts') ?>
    <?= vite()->js('ts/index.ts', ['defer' => true]) ?>
</head>

<body>
    <?= snippet('nav') ?>
    <?= $slot ?>
</body>

</html>