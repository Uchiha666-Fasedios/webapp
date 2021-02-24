<?php

use Symfony\Component\Translation\MessageCatalogue;

$catalogue = new MessageCatalogue('sv', array (
  'KnpPaginatorBundle' => 
  array (
    'label_previous' => 'Föregående',
    'label_next' => 'Nästa',
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
