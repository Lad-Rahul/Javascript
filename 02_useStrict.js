"use strict"
/*
The directive looks like a string: "use strict" or 'use strict'. 
When it is located at the top of a script, the whole script works the “modern” way.
*/

/*
"use strict" can be put at the beginning of a function. Doing that enables strict mode in that function only.
 But usually people use it for the whole script.

 (function() {
  'use strict';

  // ...your code here...
})()
*/

/*
Modern JavaScript supports “classes” and “modules” – 
advanced language structures (we’ll surely get to them), 
that enable use strict automatically. So we don’t need to add the "use strict" directive, if we use them.

So, for now "use strict"; is a welcome guest at the top of your scripts. 
Later, when your code is all in classes and modules, you may omit it.
*/



/*
There is no directive like "no use strict" that reverts the engine to old behavior.
Once we enter strict mode, there’s no going back.
*/

//When you use a developer console to run code, please note that it doesn’t use strict by default.