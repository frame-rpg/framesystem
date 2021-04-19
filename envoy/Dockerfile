FROM getenvoy/envoy:stable
COPY envoy.yaml /etc/envoy/envoy.yaml
RUN chmod go+r /etc/envoy/envoy.yaml
# CMD ["/usr/bin/envoy", "--config-path", "/etc/envoy/envoy.yaml", "--log-path", "/tmp/envoy.log"]
# CMD /usr/bin/envoy --config-path /etc/envoy/envoy.yaml --log-path /tmp/envoy.log