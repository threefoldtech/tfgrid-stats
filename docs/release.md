# Releasing process

To create a new release there are some steps is required:

## 1. **Update Charts file**

In [charts.yaml](../tfgrid-stats/Chart.yaml) replace the value of `appVersion` with the new release tag. Then, in [values.yaml](../tfgrid-stats/values.yaml) change the tag version with the new release tag.

  ````yaml
  appVersion: "x.x.x"
  ````

## 2. **Create a new release**

  Create a new release with the new tag added in `appVersion` & `Charts.yaml`.
  
  > You can find more details about creating a new release in [Release projects](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository#creating-a-release).
  
## 3. **Create a new issue on [tf_operations](https://github.com/threefoldtech/tf_operations)**

  Create a new issue of type `Update Request` and mention the following:

- **Release link**
  
    You can find it by changing the branch to the needed tag and then copy the URL.
- **Charts directory link**
  
    In this case will be [tfgrid-stats](../tfgrid-stats/)

  Newly created issue should look like this:
  ![image](https://user-images.githubusercontent.com/62248851/210758782-1ff46374-9e4b-4e0d-a318-a7bf114022b1.png)
