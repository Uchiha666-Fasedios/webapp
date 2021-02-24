<?php

use Symfony\Component\Translation\MessageCatalogue;

$catalogue = new MessageCatalogue('bg', array (
  'KnpPaginatorBundle' => 
  array (
    'label_previous' => 'Предишна',
    'label_next' => 'Следваща',
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
