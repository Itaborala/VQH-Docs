**File**:: util/data_manager.py
**Tags**:: #vqhapi/util  

#### Description
Implementation of the FileIO protocol class for Legacy 2023 experiment files, which are stored in separate TXT and JSON files for different signals
#### Connected Classes
[[FileIO]]

#### Attributes

- `format`
- `default_name` = ('aggregate_data', 'exp_values')


#### Methods
- `read`
- `write`
- `combine_lists` - gathers the data from different files fot the dataset format