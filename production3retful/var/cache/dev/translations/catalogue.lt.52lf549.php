<?php

use Symfony\Component\Translation\MessageCatalogue;

$catalogue = new MessageCatalogue('lt', array (
  'KnpPaginatorBundle' => 
  array (
    'label_previous' => 'Ankstesnis',
    'label_next' => 'Sekantis',
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
