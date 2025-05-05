**File**:: core/vqh_mapper.py
**Tags**::  #vqhapi/mapper #vqhapi/core  

#### Description
This is the other end of VQH, where we take iteration data and map it into sound using some sonification strategy. It uses a custom defined mapper function that is stored in a library.
#### Connected Classes
[[MappingInterface]]
(Is [[MappingInterface|VQHMappingStrategy]] a substitute for this?)
[[Queue]]


#### Attributes

- `queue`: queue.Queue
- `thread` - threading.Thread
- `clock_lock` - threading.Lock
- `strategy`:int  - defined in [[SonificationLibrary]]
- `synthesizer` - [[MappingInterface]]
- `timeout` - Is this being used?
- `is_done`
- `_clock_speed`: float - #vqhapi/property [[VQHInlet]]

#### Methods
- `start_mapper`
- `run_mapper`
- `update_clock_speed` - part of the property setter, or deprecated?
- `stop`