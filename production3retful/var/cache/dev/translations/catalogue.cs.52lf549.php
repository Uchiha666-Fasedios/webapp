<?php

use Symfony\Component\Translation\MessageCatalogue;

$catalogue = new MessageCatalogue('cs', array (
  'KnpPaginatorBundle' => 
  array (
    'label_previous' => 'Předchozí',
    'label_next' => 'Další',
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
