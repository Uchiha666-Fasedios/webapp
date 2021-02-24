<?php

use Symfony\Component\Translation\MessageCatalogue;

$catalogue = new MessageCatalogue('da', array (
  'KnpPaginatorBundle' => 
  array (
    'label_previous' => 'Forrige',
    'label_next' => 'Næste',
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
