<?php

use Symfony\Component\Translation\MessageCatalogue;

$catalogue = new MessageCatalogue('de', array (
  'KnpPaginatorBundle' => 
  array (
    'label_previous' => 'Vorherige',
    'label_next' => 'Nächste',
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
