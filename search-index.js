var searchIndex = {};
searchIndex['oxischeme'] = {"items":[[0,"","oxischeme","A Scheme implementation, in Rust."],[3,"main","","The main Read-Eval-Print-Loop."],[0,"environment","","The implementation of the Scheme environment that binds symbols to values."],[1,"Environment","oxischeme::environment","The `Environment` associates symbols with values."],[4,"EnvironmentPtr","","A pointer to an `Environment` on the heap."],[4,"RootedEnvironmentPtr","","A rooted pointer to an `Environment` on the heap."],[10,"extend","","Extend the given environment with the names and associated values\nsupplied, resulting in a new environment.",0],[10,"set_parent","","Set the parent of this environment. When looking up bindings, if this\nenvironment doesn't have the target binding, and this environment has a\nparent environment, we will recurse to the parent and do a lookup in\nthat environment, and so on until either there are no more environments\nor we find the binding.",0],[10,"define","","Define a new variable bound to the given value.",0],[10,"define_unrooted","","Define a new variable bound to the given (unrooted) value.",0],[10,"update","","Update an *existing* binding to be associated with the new value.",0],[10,"lookup","","Lookup the value associated with the given symbol.",0],[10,"hash","","",0],[10,"default","","",0],[10,"trace","","",0],[10,"to_gc_thing","","",1],[0,"eval","oxischeme","Evaluating values."],[3,"evaluate_in_global_env","oxischeme::eval","Evaluate the given form in the global environment."],[3,"evaluate","","Evaluate the given form in the given environment."],[3,"evaluate_file","","Evaluate the file at the given path and return the value of the last form."],[0,"heap","oxischeme","The `heap` module provides memory management for our Scheme implementation."],[1,"Arena","oxischeme::heap","An arena from which to allocate `T` objects from."],[1,"ArenaPtr","","A pointer to a `T` instance in an arena."],[1,"Rooted","","A smart pointer wrapping the pointer type `T`. It keeps its referent rooted\nwhile the smart pointer is in scope to prevent dangling pointers caused by a\ngarbage collection within the pointers lifespan. For more information see\nthe module level documentation about rooting."],[1,"Heap","","The scheme heap and GC runtime, containing all allocated cons cells,\nenvironments, procedures, and strings (including strings for symbols)."],[2,"GcThing","","The union of the various types that are GC things."],[12,"Cons","","",2],[12,"String","","",2],[12,"Environment","","",2],[12,"Procedure","","",2],[4,"StringPtr","","A pointer to a string on the heap."],[4,"RootedStringPtr","","A rooted pointer to a string on the heap."],[4,"IterGcThing","","An iterable of `GcThing`s."],[5,"DEFAULT_CONS_CAPACITY","","The default capacity of cons cells."],[5,"DEFAULT_STRINGS_CAPACITY","","The default capacity of strings."],[5,"DEFAULT_ENVIRONMENTS_CAPACITY","","The default capacity of environments."],[5,"DEFAULT_PROCEDURES_CAPACITY","","The default capacity of environments."],[6,"ToGcThing","","A trait for types that can be coerced to a `GcThing`."],[9,"to_gc_thing","","Coerce this value to a `GcThing`.",3],[6,"Trace","","The `Trace` trait allows GC participants to inform the collector of their\nreferences to other GC things."],[9,"trace","","Return an iterable of all of the GC things referenced by this structure.",4],[10,"new","","Create a new `Arena` with the capacity to allocate the given number of\n`T` instances.",5],[10,"capacity","","Get this heap's capacity for simultaneously allocated cons cells.",5],[10,"is_full","","Return true if this arena is at full capacity, and false otherwise.",5],[10,"allocate","","Allocate a new `T` instance and return a pointer to it.",5],[10,"sweep","","Sweep the arena and add any reclaimed objects back to the free list.",5],[10,"hash","","",6],[10,"null","","Get the null ArenaPtr<T>. Should never actually be used, but sometimes\nit is needed for initializing a struct's default, uninitialized form.",6],[10,"deref","","",6],[10,"deref_mut","","",6],[10,"fmt","","",6],[10,"eq","","Note that `PartialEq` implements pointer object identity, not structural\ncomparison. In other words, it is equivalent to the scheme function\n`eq?`, not the scheme function `equal?`.",6],[10,"new","","Create a new `Rooted<T>`, rooting the referent.",7],[10,"emplace","","Unroot the current referent and replace it with the given referent,\nwhich then gets rooted.",7],[10,"deref","","",7],[10,"deref_mut","","",7],[10,"drop","","",7],[10,"clone","","",7],[10,"eq","","",7],[10,"eq","","",7],[10,"fmt","","",7],[10,"to_gc_thing","","",8],[10,"new","","Create a new `Heap` with the default capacity.",9],[10,"with_arenas","","Create a new `Heap` using the given arenas for allocating cons cells and\nstrings within.",9],[10,"allocate_cons","","Allocate a new cons cell and return a pointer to it.",9],[10,"allocate_string","","Allocate a new string and return a pointer to it.",9],[10,"allocate_environment","","Allocate a new `Environment` and return a pointer to it.",9],[10,"allocate_procedure","","Allocate a new `Procedure` and return a pointer to it.",9],[10,"collect_garbage","","Perform a garbage collection on the heap.",9],[10,"add_root","","Explicitly add the given GC thing as a root.",9],[10,"drop_root","","Unroot a GC thing that was explicitly rooted with `add_root`.",9],[10,"increase_gc_pressure","","Apply pressure to the GC, and if enough pressure has built up, then\nperform a garbage collection.",9],[10,"global_env","","Get the global environment.",9],[10,"get_or_create_symbol","","Ensure that there is an interned symbol extant for the given `String`\nand return it.",9],[10,"quote_symbol","","",9],[10,"if_symbol","","",9],[10,"begin_symbol","","",9],[10,"define_symbol","","",9],[10,"set_bang_symbol","","",9],[10,"unspecified_symbol","","",9],[10,"lambda_symbol","","",9],[10,"fmt","","",2],[10,"eq","","",2],[10,"ne","","",2],[10,"hash","","",2],[10,"from_string_ptr","","Create a `GcThing` from a `StringPtr`.",2],[10,"from_cons_ptr","","Create a `GcThing` from a `ConsPtr`.",2],[10,"from_procedure_ptr","","Create a `GcThing` from a `ProcedurePtr`.",2],[10,"from_environment_ptr","","Create a `GcThing` from a `EnvironmentPtr`.",2],[10,"trace","","",2],[0,"primitives","oxischeme","Implementation of primitive procedures."],[3,"define_primitives","oxischeme::primitives",""],[4,"PrimitiveFunction","","The function signature for primitives."],[0,"print","oxischeme","Printing values' text representations."],[3,"print","oxischeme::print","Print the given value's text representation to the given writer."],[0,"read","oxischeme","Parsing values."],[1,"Read","oxischeme::read","`Read` iteratively parses values from the input `Reader`."],[3,"read_from_bytes","","Create a `Read` instance from a byte vector."],[3,"read_from_string","","Create a `Read` instance from a `String`."],[3,"read_from_str","","Create a `Read` instance from a `&str`."],[3,"read_from_file","","Create a `Read` instance from the file at `path_name`."],[10,"new","","Create a new `Read` instance from the given `Reader` input source.",10],[10,"get_result","","Get the results of parsing thus far. If there was an error parsing, a\ndiagnostic message will be the value of the error.",10],[10,"next","","",10],[0,"value","oxischeme","Scheme value implementation."],[1,"Cons","oxischeme::value","A cons cell is a pair of `car` and `cdr` values. A list is one or more cons\ncells, daisy chained together via the `cdr`. A list is \"proper\" if the last\n`cdr` is `Value::EmptyList`, or the scheme value `()`. Otherwise, it is\n\"improper\"."],[1,"Procedure","","Procedures are represented by their parameter list, body, and a pointer to\ntheir definition environment."],[1,"Primitive","","A primitive procedure, such as Scheme's `+` or `cons`."],[2,"Value","","`Value` represents a scheme value of any type."],[12,"EmptyList","","The empty list: `()`.",11],[12,"Pair","","The scheme pair type is a pointer to a GC-managed `Cons` cell.",11],[12,"String","","The scheme string type is a pointer to a GC-managed `String`.",11],[12,"Symbol","","Scheme symbols are also implemented as a pointer to a GC-managed\n`String`.",11],[12,"Integer","","Scheme integers are represented as 64 bit integers.",11],[12,"Boolean","","Scheme booleans are represented with `bool`.",11],[12,"Character","","Scheme characters are `char`s.",11],[12,"Procedure","","A user-defined Scheme procedure is a pointer to a GC-managed\n`Procedure`.",11],[12,"Primitive","","A primitive Scheme procedure is just a pointer to a `Primitive` type\nfunction pointer.",11],[3,"list","","A helper utility to create a cons list from the given values."],[4,"ConsPtr","","A pointer to a cons cell on the heap."],[4,"RootedConsPtr","","A rooted pointer to a cons cell on the heap."],[4,"ProcedurePtr","","A pointer to a `Procedure` on the heap."],[4,"RootedProcedurePtr","","A rooted pointer to a `Procedure` on the heap."],[4,"RootedValue","",""],[4,"SchemeResult","","Either a Scheme `RootedValue`, or a `String` containing an error message."],[10,"eq","","",12],[10,"ne","","",12],[10,"hash","","",12],[10,"default","","Do not use this method, instead allocate cons cells on the heap with\n`Heap::allocate_cons` and get back a `ConsPtr`.",12],[10,"car","","Get the car of this cons cell.",12],[10,"cdr","","Get the cdr of this cons cell.",12],[10,"set_car","","Set the car of this cons cell.",12],[10,"set_cdr","","Set the cdr of this cons cell.",12],[10,"trace","","",12],[10,"to_gc_thing","","",13],[10,"hash","","",14],[10,"get_params","","Get this procedure's parameters.",14],[10,"get_body","","Get this procedure's body.",14],[10,"get_env","","Get this procedure's environment.",14],[10,"set_params","","Set this procedure's parameters.",14],[10,"set_body","","Set this procedure's body.",14],[10,"set_env","","Set this procedure's environment.",14],[10,"default","","Do not use this method, instead allocate procedures on the heap with\n`Heap::allocate_procedure` and get back a `ProcedurePtr`.",14],[10,"trace","","",14],[10,"to_gc_thing","","",15],[10,"eq","","",16],[10,"hash","","",16],[10,"call","","",16],[10,"fmt","","",16],[10,"fmt","","",11],[10,"eq","","",11],[10,"ne","","",11],[10,"hash","","",11],[10,"new_integer","","Create a new integer value.",11],[10,"new_boolean","","Create a new boolean value.",11],[10,"new_character","","Create a new character value.",11],[10,"new_pair","","Create a new cons pair value with the given car and cdr.",11],[10,"new_procedure","","Create a new procedure with the given parameter list and body.",11],[10,"new_primitive","","",11],[10,"new_string","","Create a new string value with the given string.",11],[10,"new_symbol","","Create a new symbol value with the given string.",11],[10,"car","","Assuming this value is a cons pair, get its car value. Otherwise, return\n`None`.",11],[10,"cdr","","Assuming this value is a cons pair, get its cdr value. Otherwise, return\n`None`.",11],[10,"is_pair","","Return true if this value is a pair, false otherwise.",11],[10,"is_atom","","Return true if this value is an atom, false otherwise.",11],[10,"to_symbol","","Coerce this symbol value to a `StringPtr` to the symbol's string name.",11],[10,"to_pair","","Coerce this pair value to a `ConsPtr` to the cons cell this pair is\nreferring to.",11],[10,"to_procedure","","Coerce this procedure value to a `ProcedurePtr` to the `Procedure` this\nvalue is referring to.",11],[10,"to_integer","","Coerce this integer value to its underlying `i64`.",11],[10,"len","","Assuming that this value is a proper list, get the length of the list.",11],[10,"to_gc_thing","","",11],[10,"cddr","","",12],[10,"cdddr","","",12],[10,"cadr","","",12],[10,"caddr","","",12],[10,"cadddr","","",12]],"paths":[[1,"Environment"],[4,"EnvironmentPtr"],[2,"GcThing"],[6,"ToGcThing"],[6,"Trace"],[1,"Arena"],[1,"ArenaPtr"],[1,"Rooted"],[4,"StringPtr"],[1,"Heap"],[1,"Read"],[2,"Value"],[1,"Cons"],[4,"ConsPtr"],[1,"Procedure"],[4,"ProcedurePtr"],[1,"Primitive"]]};
initSearch(searchIndex);
