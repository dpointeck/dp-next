<?php layout() ?>

<h1><?= $page->title() ?></h1>
<time datetime="<?= $page->date('c') ?>"><?= $page->date('d F Y') ?></time>
<article>
  <?= $page->text()->kirbytext() ?>
  
  <?php if ($page->hasPrev()): ?>
    <a href="<?= $page->prev()->url() ?>">Previous</a>
  <?php endif ?>
  <?php if ($page->hasNext()): ?>
    <a href="<?= $page->next()->url() ?>">Next</a>
  <?php endif ?>
</article>

