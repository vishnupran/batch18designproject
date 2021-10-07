
function OneTimePad(encdec, text, key)
{
   var pad, i, out, c, uc;
   
   pad = "";
   key = key.toUpperCase();
   for (i = 0; i < key.length; i ++)
   {
      c = key.charAt(i)
      if (c >= 'A' && c <= 'Z')
      {
         pad += c;
      }
   }
   
   out = "";
   for (i = 0; i < text.length; i ++)
   {
      c = text.charAt(i);
      uc = ' ';
      if (c >= 'A' && c <= 'Z')
      {
         uc = 'A';
      }
      if (c >= 'a' && c <= 'z')
      {
         uc = 'a';
      }
      if (uc != ' ')
      {
         if (pad.length == 0)
	 {
	    pad = "AAAAAAAA";
	 }
         c = c.charCodeAt(0) - uc.charCodeAt(0) +
	    encdec * (pad.charCodeAt(0) - 'A'.charCodeAt(0));
	 c = (c + 26) % 26;
	 c = String.fromCharCode(uc.charCodeAt(0) + c);
	 pad = pad.slice(1, pad.length);
      }
      out += c;
   }
   
   return out;
}

document.OneTimePad_Loaded = 1;
