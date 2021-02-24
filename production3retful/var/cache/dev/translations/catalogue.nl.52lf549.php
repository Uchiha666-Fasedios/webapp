<?php

use Symfony\Component\Translation\MessageCatalogue;

$catalogue = new MessageCatalogue('nl', array (
  'KnpPaginatorBundle' => 
  array (
    'label_previous' => 'Vorige',
    'label_next' => 'Volgende',
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
