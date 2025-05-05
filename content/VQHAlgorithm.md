**File**:: core/vqh_source.py
**Tags**:: #vqhapi/algorithm   

#### Description
This is the Variational Quantum Algorithm Protocol class, responsible for encoding the problem using a protocol, running an [[Estimator]],  and using a [[Sampler]] to obtain the intermediate states and observables at every iteration. This data is sent via callback all the way to the Source, to be passed to the Queue.

The algotith can use either a [[Sampler]] or an [[Estimator]]
#### Connected Classes/
[[VQHProcess]], [[VQHProtocol]]

**Implementations**:
 - [[VQEAlgorithm]]

#### Attributes

- `protocol`: [[VQHProtocol]] - to encode and decode a problem


#### Methods
- `iteration_callback` - Gets a callable from Source to parse the iteration data.
- `prepare` - loads necessary configs and prepares the VQA.
- `run_algorithm`