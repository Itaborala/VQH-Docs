**File**:: core/vqh_source.py
**Tags**:: #vqhapi/algorithm  #vqhapi/core 

#### Description
Protocol Class defining a physical problem to be simulated (at the time of writing, only QUBO was available)
#### Connected Classes
[[QUBOProblemRT]], [[VQHProcess]] [[VQHAlgorithm]]

#### Attributes

- `data` - should be the data loaded from a config file, and describes the variables of the problem, such as h_setup.csv
- `size` - the number of problems defined in that file 


#### Methods
- `evaluate`
- `data`
