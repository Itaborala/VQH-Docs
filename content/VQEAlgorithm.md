**File**:: vqe.vqe_algorithm.py
**Tags**:: #vqhapi/algorithm #vqhapi/vqe  

#### Description
This implements the full handling of the VQE algorithm, dealing with a SamplingVQE implementation (but allowing for other strategies in the future). It contains all config information and necessary data, classes and callables to both run the algorithm in a hardware interface and connect with the rest of the software.
#### Connected Classes
[[VQHAlgorithm]], [[SamplingVQE]]

#### Attributes

- `protocol`: VQHProtocol
- `variables_index`: dict?
- `num_parameters`:int


#### Methods
- `return_optimizer` - COBYLA, SPSA, etc...
- `iteration_callback` - part of the pipeline to send the iteration data back to VQHSource
- `run_segmented` - DEPRECATED FUNCTION
- `prepare`
- `init_point`
- `run_algorithm`