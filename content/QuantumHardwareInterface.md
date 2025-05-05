**File**:: abstract_classes.py
**Tags**:: #vqhapi/hardware 

#### Description
Abstract Base class that modularizes the quantum providers and their subsequent simulators and QPUs. This is used by the algorithms to run the Sampler and Estimator.

Each algorithm will access the respective Sampler and/or Estimators classes of a given platform.
#### Connected Classes
[[Sampler]], [[Estimator]], [[VQHAlgorithm]] [[SamplingVQE]], [[HardwareLibrary]]

**Implementations**:
- [[LocalSimulatorInterface]]
- [[IQMHardwareInterface]]
- [[IQMRealHardwareInterface]]
- [[IBMHardwareInterface]]
#### Attributes

- `provider` - Any quantum Provider
- `backend`:str - A valid backend name, if necessary (it can connect to a pre-defined default backend)


#### Methods
- `connect`
- `execute`
- `get_backend`
- `optimize` (This is not being used, and probably means "Transpile")