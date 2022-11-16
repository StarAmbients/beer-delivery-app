project = "delivery-front"

app "delivery-front" {
  labels = {
    "service" = "delivery-front",
    "env"     = "dev"
    }
  config {
      env = {
      PORT = 3000
    }
  }

  build {
    use "docker" {}

    registry {
        use "docker" {
            image = "docker.io/starambients/trybe-my-proj-36-beer-delivery-app_frontend"
            tag   = "2"
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