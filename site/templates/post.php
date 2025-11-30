<?php snippet('head') ?>

<h1><?= $page->title() ?></h1>

<?php if ($page->date()): ?>
<time datetime="<?= $page->date('Y-m-d') ?>"><?= date('F j, Y', strtotime($page->date())) ?></time>
<?php endif; ?>

<?= $page->text()->kirbytext() ?>
