<?php

use Symfony\Component\Translation\MessageCatalogue;

$catalogue = new MessageCatalogue('ky', array (
  'KnpPaginatorBundle' => 
  array (
    'label_previous' => 'Мурунку',
    'label_next' => 'Кийинки',
  ),
));

$catalogueEn = new MessageCatalogue('en', array (
  'KnpPaginatorBundle' => 
  array (
    'label_previous' => 'Previous',
    'label_next' => 'Next',
  ),
));
$catalogue->addFallbackCatalogue($catalogueEn);

return $catalogue;
