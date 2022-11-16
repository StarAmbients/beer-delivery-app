project = "delivery-mysql"

app "delivery-mysql" {
  labels = {
    "service" = "delivery-mysql",
    "env"     = "dev"
    }
  config {
      env = {
      PORT = 3306
    }
  }

  build {
    use "docker" {}

    registry {
        use "docker" {
            image = "docker.io/starambients/mysql"
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