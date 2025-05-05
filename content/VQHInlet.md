**File**:: util/inlets.py
**Tags**:: #vqhapi/util 

#### Description
This is a class property/attribute resetter. It takes a class and an attribute that was exposed using the `@property` and the `@<property>.setter` decorators. Then it can subscribe to an outlet

#### Connected Classes
Subscribes to a [[VQHOutlet]]
**Classes that have exposed attributes**:
- [[QUBOProblemRT]]  (`qubos`)
- [[MusicalScale]]  (`current_scale`)
- [[VQHMapper]] (`clock_speed`)
#### Attributes / Connections

-  `target_instance` - an object
-  `target_attribute` - respective object's attribute
-  `name` : str - string version of the target_attribute


#### Methods
- `update`