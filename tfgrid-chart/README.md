#### Note

* by default we use nginx ingress controller, just enable it.
* if you want to use the ingress, you need to install the ingress controller.

#### 1. Deploying the TFGrid Chart and enable the ingress

```bash
    helm install tf-grid-stats ./tf-stats/ --values ./tf-stats/values.yaml --set ingress.enabled=true
```

#### 2. Deploying the TFGrid Chart and set host domain_name

```bash
    helm install tf-grid-stats ./tf-stats/ --values ./tf-stats/values.yaml --set ingress.hosts[0].host=<domain_name>
```

#### 2. Test it, and check the results

```bash
    curl -X GET http://<domain_name>/
```

#### Using traefik ingress controller

```yaml 
    # Make sure traefik is installed.
    # Just replace the annotations with:
    annotations:
      kubernetes.io/ingress.class: traefik
      ingress.kubernetes.io/ssl-passthrough: "true"
      traefik.ingress.kubernetes.io/router.tls.certresolver: gridca
```
