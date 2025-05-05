**File**:: core/vqh_core_new.py
**Tags**:: #vqhapi/core

#### Description

The [[VQHCore]] class is responsible for initializing and holding all the classes throughout the codebase together. The Core ties all classes, and instantiates them during runtime.
The instantiated classes can then be handled and controlled by the [[VQHController]] class.

#### Parent Class or Code Hierarchy
[[CLI]]

#### Attributes / Connections

-  `problem_event`:  threading.Event() - for handling segmented mode 
-  `strategy_type`: str - either `file` or `process`
-  `strategy_name`: str - determines the stragegy factory (a dictionary with tuples containing specific implementations of VQHSourceStrategy)
-  `rt_mode`: str - determines the runtime execution of VQH. `segmented` `hard` or `deferred`
-  `session_name`: str - file Path name for dataset folder.
-  `strategy:` [[VQHSourceStrategy]] - Initializes the strategy
-  `hardware_libray`: [[HardwareLibrary]] - Initializes quantum hardware platform factory
-  `sonificaiton_library`: [[SonificationLibrary]] - Initializes soniffication mapping factory/dict
-  `hardware_interface`: [[QuantumHardwareInterface]] - Loads and connects to a quantum hardware platform/simulator/hardware
-  `son_type`: int - Holds the index of the sonification mapping type, as defined in the library.
-  `source`: [[VQHSource]]
-  `mapper`: [[VQHMapper]]


#### Methods
-  `init_strategy`
-  `init_mapper`