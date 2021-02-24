<?php

use Symfony\Component\Translation\MessageCatalogue;

$catalogue = new MessageCatalogue('it', array (
  'KnpPaginatorBundle' => 
  array (
    'label_previous' => 'Precedente',
    'label_next' => 'Successivo',
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
