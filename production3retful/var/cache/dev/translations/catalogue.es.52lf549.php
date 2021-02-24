<?php

use Symfony\Component\Translation\MessageCatalogue;

$catalogue = new MessageCatalogue('es', array (
  'KnpPaginatorBundle' => 
  array (
    'label_previous' => 'Anterior',
    'label_next' => 'Siguiente',
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
