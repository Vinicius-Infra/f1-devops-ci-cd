variable "aws_region" {
  type    = string
  default = "us-east-1"
}

variable "project_name" {
  type    = string
  default = "f1-api"
}

variable "instance_type" {
  type    = string
  default = "t3.micro"
}

variable "key_name" {
  description = "Nome do Key Pair existente na AWS (EC2 > Key Pairs)"
  type        = string
}

variable "allowed_ssh_cidr" {
  description = "Seu IP público em /32 (recomendado). Ex: 200.100.50.25/32"
  type        = string
  default     = "0.0.0.0/0"
}