<?php
/**
 * Created by rafaelcaviquioli <rafaelcitj@gmail.com>
 * User: rafaelcaviquioli
 * Date: 26/01/17
 * Time: 22:31
 */
header('Content-Type: application/json');

echo file_get_contents("https://www.receitaws.com.br/v1/cnpj/" . $_GET['cnpj']);