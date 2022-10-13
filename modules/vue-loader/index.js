const regTemplate = /\<template\>(.+?)\<\/template\>/;
const regScript = /\<script\>(.+?)\<\/script\>/;
const regFirstSign = /({)/;

module.exports = function (source) {
  console.log(source)
  const _source = source.replace(/[\r\n]/g, '')
  const template = _source.match(regTemplate)[1]
  const script = _source.match(regScript)[1];
  const finalScript = script.replace(regFirstSign, '$1 template:' + '`' + template + '`' + ',')
  
  return finalScript;
}