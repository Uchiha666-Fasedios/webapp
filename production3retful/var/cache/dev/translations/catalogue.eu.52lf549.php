<?php

use Symfony\Component\Translation\MessageCatalogue;

$catalogue = new MessageCatalogue('eu', array (
  'KnpPaginatorBundle' => 
  array (
    'label_previous' => 'Aurrekoa',
    'label_next' => 'Hurrengoa',
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
