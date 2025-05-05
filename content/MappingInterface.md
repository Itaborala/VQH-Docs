---
aliases:
  - VQHMappingStrategy
  - VQHMappingInterface
---
**File**:: abstract_classes.py
**Tags**::  #vqhapi/mapper #vqhapi/synth  #vqhapi/core 

#### Description
Abstract (Protocol in the future) class for modularizing and connecting to external sonification platforms and infrastructure.
#### Connected Classes
 [[SonificationLibrary]] [[MappingInterface|VQHMappingStrategy]]

**Implementations** (which are connected through a factory [[SonificationLibrary]]):
- [[SuperColliderMapping]]
- [[ZenMapping]]
- [[OSCMapping]]
- [[ScoreBuilderMapping]]
NOTE: migrate this to VQHMappingStrategy or VQHMappingInterface

#### Attributes

- `platform`:str - Platform name


#### Methods
- `map_data` - (getattr function using the tuple retrieved from the [[SonificationLibrary]]) . This function is called by the [[VQHMapper]] after obtaining new data from the Queue.