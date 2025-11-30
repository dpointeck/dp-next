<head>
  <!-- Preload key fonts for better performance -->
  <link rel="preload" href="<?= $kirby->url('assets') ?>/fonts/VisbyCF-Regular.woff2" as="font" type="font/woff2" crossorigin />
  <link rel="preload" href="<?= $kirby->url('assets') ?>/fonts/VisbyCF-Bold.woff2" as="font" type="font/woff2" crossorigin />
  <link rel="preload" href="<?= $kirby->url('assets') ?>/fonts/code-saver_regular.woff2" as="font" type="font/woff2" crossorigin />

  <link href="<?= $kirby->url('assets') ?>/css/fonts.css" rel="stylesheet" />
  <link href="<?= $kirby->url('assets') ?>/css/main.css" rel="stylesheet" />
  <script defer type="module" src="<?= $kirby->url('assets') ?>/js/main.js"></script>
</head>

<h1><?= $page->title() ?></h1>

