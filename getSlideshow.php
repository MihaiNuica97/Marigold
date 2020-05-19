<?php
$log_directory = './img/slideshow/';

$results_array = array();

if (is_dir($log_directory))
{
        if ($handle = opendir($log_directory))
        {
                //Notice the parentheses I added:
                while(($file = readdir($handle)) !== FALSE)
                {
                        if(strpos($file, '.jpg') !== FALSE){
                            $results_array[] = $file;
                        }
                }
                closedir($handle);
        }
}

echo json_encode($results_array);
?>