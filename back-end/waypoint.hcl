project = "delivery-back"

app "delivery-back" {
  labels = {
    "service" = "delivery-back",
    "env"     = "dev"
    }
  config {
      env = {
      PORT = 3001
    }
  }

  build {
    use "docker" {}

    registry {
        use "docker" {
            image = "docker.io/starambients/trybe-my-proj-36-beer-delivery-app_backend"
            tag   = "1"
            local = false
        }
    }
  }

  deploy {
    use "aws-ecs" {
        region = "us-east-1"
        memory = "512"
    }
  }
}