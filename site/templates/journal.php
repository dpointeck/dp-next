<?php snippet('head') ?>

<h1><?= $page->title() ?></h1>

<?php if ($page->text()): ?>
<div class="intro">
  <?= $page->text()->kirbytext() ?>
</div>
<?php endif; ?>

<ul class="posts-list">
  <?php foreach ($page->children() as $post): ?>
    <li>
      <a href="<?= $post->url() ?>">
        <?= $post->title() ?>
      </a>
    </li>
  <?php endforeach; ?>
</ul>
