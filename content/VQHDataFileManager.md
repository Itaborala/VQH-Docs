**File**:: util/data_manager.py
**Tags**:: #vqhapi/util  

#### Description
This class handles folder creation, dataset indexing and parsing the file to the correct IO class, according to the format. Modular approach allows for the inclusion of new file formats in the future.

#### Connected Classes
[[FileIO]]

#### Attributes

-  `folder_name`:str  - same as VQH session name
-  `latest_index`: int - unique identifier of an experiment dataset inside a folder.
-  `file_io`: [[FileIO]] - A specific file reader/writer


#### Methods
- `write`
- `read`
- `create_parent_folder`
- `create_new_data_folder`
- `get_latest_index`