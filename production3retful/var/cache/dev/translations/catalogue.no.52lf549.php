<?php

use Symfony\Component\Translation\MessageCatalogue;

$catalogue = new MessageCatalogue('no', array (
  'KnpPaginatorBundle' => 
  array (
    'label_previous' => 'Forrige',
    'label_next' => 'Neste',
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
