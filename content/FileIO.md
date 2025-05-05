**File**:: util/data_manager.py
**Tags**:: #vqhapi/util  

#### Description
Protocol Class defining the operation of a File IO.
Ideally, a FileIO object implementation should have methods to read and write datasets to the system in the proposed format/structure

#### Connected Classes
**Implementations**: [[JSONFileIO]], [[LegacyFileIO]]
[[VQHDataSet]] [[VQHDataFileManager]]
#### Attributes

- `format`:str  - `json`, `legacy`, etc.
- `default_name`:  str - name of the file


#### Methods
- `read`
- `write`