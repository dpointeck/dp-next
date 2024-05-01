<?php layout() ?>

<?php foreach($journal as $year => $posts): ?>
  <?= $year ?>
  <?php foreach($posts as $post): ?>
    <article>
      <span><?= $post->date()->toDate('d M') ?></span>
      <a href="<?= $post->url() ?>"><h2><?= $post->title() ?></h2></a>
    </article>
    <?php endforeach ?>
<?php endforeach ?>

