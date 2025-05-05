**File**:: util.inlets.py
**Tags**:: #vqhapi/util 

#### Description
Publisher/subscriber design pattern.
It collects [[VQHInlet]] classes and bangs updated values to be passed downstream to the classes with connected inlets

#### Connected Classes
[[VQHInlet]], [[VQHController]]
#### Attributes

- `inlets`:dict - a dictionary of VQHInlets.
- `lock`: threading.Lock() - necessary for updating classes, as they are thread-sensitive


#### Methods
- `bang`
- `close` - sentinel bang
- `connect`
- `disconnect`