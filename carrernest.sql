-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: careernest
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `candidatos`
--

DROP TABLE IF EXISTS `candidatos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `candidatos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cpf` varchar(14) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `telefone` varchar(20) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `data_nascimento` date NOT NULL,
  `curso` varchar(100) NOT NULL,
  `genero` enum('Masculino','Feminino') DEFAULT NULL,
  `linkedin` varchar(255) DEFAULT NULL,
  `criado_em` datetime DEFAULT current_timestamp(),
  `skills` text DEFAULT NULL,
  `educacao` varchar(255) DEFAULT NULL,
  `descricao` text DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cpf` (`cpf`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `candidatos`
--

LOCK TABLES `candidatos` WRITE;
/*!40000 ALTER TABLE `candidatos` DISABLE KEYS */;
INSERT INTO `candidatos` VALUES (8,'478.064.688-03','Bernardo de Souza Madureira','bernardomadureira.souza@gmail.com','(11) 99300-1135','$2b$10$jbnIbn6B6ydbMvKjUMhPsOhAowwhPwgqhXk0RzirR5IydxZc5G4T2','2008-01-24','Desenvolvimento de Sistemas','Masculino','https://linkedin.com/in/bernardo-madureira','2025-05-27 10:36:24','[\"React\",\"Node.js\",\"MySQL\",\"Next.js\"]','SENAI Armando de Arruda Pereira','Estudante dedicado cursando desenvolvimento de sistemas com interesse em back-end e tecnologias web modernas. '),(13,'478.036.718-29','Mariana de Oliveira Ferreira','ma.oliveira200508@gmail.com','(11) 93490-2005','$2b$10$Vgh52xujXodo.I28anXd1.Zm1.hglLybaH9SMl5IvhoV7XO8CHsQi','2008-05-20','Desenvolvimento de Sistemas','Feminino','http://linkedin.com/in/mariana-oliveira-b30ba5331/','2025-05-28 08:27:35','[\"HTML\", \"CSS\", \"JavaScript\", \"Figma\"]','SENAI Armando de Arruda Pereira','Focada em interfaces intuitivas e design limpo, com forte domínio de HTML, CSS e ferramentas de prototipagem.'),(14,'474.821.238-14','Isabela Alves','isabela.alvess221512@gmail.com','(11) 95588-3960','$2b$10$DH.uou.CTk2PYgs7A/X8m.jNDxVqselGcSpGn/u7aCPY7IeVRPIeq','2008-02-22','Desenvolvimento de Sistemas','Feminino','isabela.alvess221512@gmail.com','2025-05-28 08:57:37','[\"Python\", \"Django\", \"PostgreSQL\"]','SENAI Armando de Arruda Pereira','Apaixonada por desenvolvimento back-end e banco de dados, com foco em Python e frameworks robustos.'),(16,'531.951.058-61','Rafaela Lino Gisolfi','linogisolfirafaela@gmail.com','(11) 93445-6586','$2b$10$m5aZ1PUheCJ.6AKn9ZB4YOju/OaNlHj2YlYqVJtBBzstgWWyw5j4i','2008-03-29','Desenvolvimento de Sistemas','Feminino','rafa.gisolgi@gmail.com','2025-05-28 09:04:07','[\"React\", \"Tailwind\", \"Firebase\"]','SENAI Armando de Arruda Pereira','Entusiasta de front-end moderno, combinando React, Tailwind e serviços como Firebase para criar experiências rápidas e responsivas.'),(20,'123.456.789-10','Lucas Rocha','lucas.rocha.dev@gmail.com','(11) 98765-4321','$2b$10$AGI7rhHL0/1nKlTe1rPG3OXuXbWDdOimGss91EZ/ye/ntafvugBEG','2005-08-15','Engenharia de Software','Masculino','https://linkedin.com/in/lucasrocha','2025-06-11 15:57:50','[\"Java\", \"Spring Boot\", \"PostgreSQL\"]','USP - Escola Politécnica','Desenvolvedor full-stack apaixonado por APIs.'),(21,'234.567.890-11','Ana Lima','ana.lima.uiux@gmail.com','(11) 99666-5544','$2b$10$gbPQIr/k3QW99Y34MWAdX.q8SoykKHN03XoiPWaztoJbLQEEnbLaq','2004-12-03','Design Digital','Feminino','https://linkedin.com/in/anaclaralima','2025-06-11 15:58:38','[\"Figma\", \"Adobe XD\", \"HTML\", \"CSS\"]','Senac São Paulo','UX designer com foco em inclusão.'),(22,'161.647.558-75','Daniela Cristina de Oliveira','daniCris@gmail.com','(11) 99712-1717','$2b$10$t443zdXNLttSCKP5jMNh.O9lAosoGzeLY.60xYecVP9ZElEKwvmRy','1976-01-17','Design Digital','Feminino','https://www.linkedin.com/in/xdanicris/','2025-06-11 16:07:55','[\"JavaScript\",\"PHP\",\"HTML\",\"Next.js\",\"Node.js\",\"React\"]','ETEC','Formada em Design gráfico, e Desenvolvimento de sistemas. Além disso, possuo cursos de back-end e rotas pelo SENAC.');
/*!40000 ALTER TABLE `candidatos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `candidaturas`
--

DROP TABLE IF EXISTS `candidaturas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `candidaturas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `vaga_id` int(11) NOT NULL,
  `candidato_id` int(11) NOT NULL,
  `status` enum('pendente','visualizado','rejeitado','aprovado') DEFAULT 'pendente',
  `data_candidatura` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `vaga_id` (`vaga_id`),
  KEY `candidato_id` (`candidato_id`),
  CONSTRAINT `candidaturas_ibfk_1` FOREIGN KEY (`vaga_id`) REFERENCES `vagas` (`id`) ON DELETE CASCADE,
  CONSTRAINT `candidaturas_ibfk_2` FOREIGN KEY (`candidato_id`) REFERENCES `candidatos` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `candidaturas`
--

LOCK TABLES `candidaturas` WRITE;
/*!40000 ALTER TABLE `candidaturas` DISABLE KEYS */;
INSERT INTO `candidaturas` VALUES (3,30,16,'visualizado','2025-06-09 21:55:25'),(5,30,13,'visualizado','2025-06-09 21:55:25'),(6,21,8,'pendente','2025-06-11 00:57:02'),(7,27,8,'rejeitado','2025-06-11 00:57:44'),(8,26,8,'visualizado','2025-06-11 01:15:12'),(9,25,8,'pendente','2025-06-11 01:16:12'),(10,24,8,'pendente','2025-06-11 01:19:41'),(11,22,8,'pendente','2025-06-11 01:20:11'),(12,22,21,'pendente','2025-06-11 16:10:34'),(13,26,21,'visualizado','2025-06-11 16:10:34'),(14,28,21,'pendente','2025-06-11 16:10:34'),(15,33,21,'pendente','2025-06-11 16:10:34'),(16,36,21,'pendente','2025-06-11 16:10:34'),(17,16,20,'pendente','2025-06-11 16:10:34'),(18,18,20,'pendente','2025-06-11 16:10:34'),(19,21,20,'pendente','2025-06-11 16:10:34'),(20,34,20,'pendente','2025-06-11 16:10:34'),(21,40,20,'pendente','2025-06-11 16:10:34'),(22,27,22,'visualizado','2025-06-11 16:12:41');
/*!40000 ALTER TABLE `candidaturas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empresas`
--

DROP TABLE IF EXISTS `empresas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empresas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cnpj` varchar(18) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `telefone` varchar(20) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `setor` varchar(100) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `descricao` text DEFAULT NULL,
  `criado_em` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `cnpj` (`cnpj`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empresas`
--

LOCK TABLES `empresas` WRITE;
/*!40000 ALTER TABLE `empresas` DISABLE KEYS */;
INSERT INTO `empresas` VALUES (1,'12.345.678/0001-90','TechLight Soluções','contato@techlight.com.br','(11) 91234-5678',' $2b$10$vPBYrilYqZcCtHA.vZVvnu12CA3SeO3B668dzJFe/5N/nH5ZVP8WG','Tecnologia','/img/empresas/techlight.png','Empresa especializada em soluções tecnológicas para automação comercial.','2025-05-21 13:28:04'),(2,'98.765.432/0001-21','Oficina Ideal','suporte@oficinaideal.com.br','(11) 99876-5432','$2b$10$51idW3ACfktXJWR6UH58Qu8Um/v6SF8EkU5x8cyoJBH.XxRFor5z2','Serviços automotivos','/img/empresas/oficinaideal.png','Oficina mecânica com atendimento especializado em veículos leves e pesados.','2025-05-21 13:28:04'),(3,'11.223.344/0001-55','Gráfica PrintMais','vendas@printmais.com.br','(11) 93456-7892','$2b$10$9kMgAgneiAkTsJ22.ioLf.8nqvkJkSF4lSgaePsKVb.FMxEa9C7Uu','Gráfica e Impressão','/img/empresas/printmais.png','Gráfica moderna que oferece impressão offset e digital com alta qualidade.','2025-05-21 13:28:04'),(19,'90.400.888/0001-4','Banco Santander (Brasil) S.A.  ','atendimento@santander.com.br','(11) 3553-4770','$2b$10$FN/8AaOYfzEJNPs26JBaru0PXBIrnM9t.eaz0gFCpntfuleRDmMBm','Bancário','/img/empresas/1748562935376-santander.png','Banco Santander é um dos maiores bancos do Brasil, oferecendo serviços financeiros para pessoas físicas e jurídicas.','2025-05-29 20:55:35'),(20,'02.558.157/0001-62','Telefônica Brasil S.A.','atendimento@telefonica.com','(11) 3003-0000','$2b$10$hFsPIt8Wren/ffRVmo.tKuVtUNAybaDMOCPVcCFX8XL/FlTM6ZqBO','Serviços de Telecomunicações','/img/empresas/1749607901085-telefonica_logo.png','A Telefônica Brasil é uma das maiores empresas de telecomunicações do país, operando sob a marca Vivo. Ela oferece serviços de telefonia fixa e móvel, internet banda larga, TV por assinatura e soluções digitais para consumidores, empresas e governos. Controlada pelo grupo espanhol Telefónica, a empresa se destaca pela ampla cobertura nacional, investimentos constantes em tecnologia — como redes 4G, 5G e fibra óptica — e liderança no mercado móvel brasileiro. A Telefônica Brasil tem forte presença no setor corporativo e busca ampliar sua atuação em serviços digitais, inovação e sustentabilidade.','2025-06-10 23:11:41'),(21,'18.236.120/0001-58','Nubank','contato@nubank.com.br','(11) 4004-4499','$2b$10$w1fEu9JYjJnl0F2d/feoNOrNjFLhdBGLifV5iugMQcu2jN/O/4tru','Serviços Financeiros','/img/empresas/nubank_logo.png','Fintech brasileira com foco em serviços bancários digitais.','2025-06-11 15:50:27'),(22,'14.380.200/0001-21','iFood','contato@ifood.com.br','(11) 4003-0706',' $2b$10$RWqYTdZ/Wrmi/xP4kvAcfupl1toz/dUyg/uJKzKlM5KtXIbRhvcMm','Tecnologia e Delivery','/img/empresas/ifood_logo.png','Líder em entrega de comida online e soluções logísticas.','2025-06-11 15:51:10');
/*!40000 ALTER TABLE `empresas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `enderecos`
--

DROP TABLE IF EXISTS `enderecos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `enderecos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `logradouro` varchar(100) NOT NULL,
  `numero` varchar(10) NOT NULL,
  `bairro` varchar(100) NOT NULL,
  `cidade` varchar(100) NOT NULL,
  `estado` char(2) NOT NULL,
  `cep` varchar(9) NOT NULL,
  `latitude` decimal(9,6) NOT NULL,
  `longitude` decimal(9,6) NOT NULL,
  `candidato_id` int(11) DEFAULT NULL,
  `empresa_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unico_candidato` (`candidato_id`),
  UNIQUE KEY `unico_empresa` (`empresa_id`),
  CONSTRAINT `fk_endereco_candidato` FOREIGN KEY (`candidato_id`) REFERENCES `candidatos` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_endereco_empresa` FOREIGN KEY (`empresa_id`) REFERENCES `empresas` (`id`) ON DELETE CASCADE,
  CONSTRAINT `enderecos_apenas_um_tipo` CHECK (`candidato_id` is not null and `empresa_id` is null or `empresa_id` is not null and `candidato_id` is null)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enderecos`
--

LOCK TABLES `enderecos` WRITE;
/*!40000 ALTER TABLE `enderecos` DISABLE KEYS */;
INSERT INTO `enderecos` VALUES (1,'Rua Maurício Jacquey','308','Rudge Ramos','São Bernardo do Campo','SP','09635080',-23.651610,-46.573730,8,NULL),(4,'Rua Bela Cintra','986','Consolação','São Paulo','SP','01415-001',-23.556579,-46.660615,NULL,1),(5,'Avenida São Miguel','2785','Vila Jacuí','São Paulo','SP','08010-000',-23.499219,-46.467438,NULL,2),(6,'Rua do Oratório','3250','Mooca','São Paulo','SP','03221-200',-23.583093,-46.574021,NULL,3),(7,'Rua Ivaí','934','Santa Maria','São Caetano do Sul','SP','09560-570',-23.638709,-46.553591,13,NULL),(8,'Rua Nazaret','1445','Barcelona','São Caetano do Sul','SP','09551-200',-23.624682,-46.552797,16,NULL),(13,'Avenida Presidente Juscelino Kubitschek','2041','Vila Nova Conceição','São Paulo','SP','04543-011',-23.590899,-46.689525,NULL,19),(14,'Avenida Engenheiro Luiz Carlos Berrini','1376 ','Cidade Monções','São Paulo','SP','04571-936',-23.600435,-46.691037,NULL,20),(16,'Rua Capote Valente','39','Pinheiros','São Paulo','SP','05409-000',-23.562733,-46.680132,NULL,21),(17,'Avenida dos Autonomistas','1496','Vila Yara','Osasco','SP','06020-010',-23.532916,-46.793284,NULL,22),(19,'Av. Prof. Luciano Gualberto','380','Butantã','São Paulo','SP','05508-010',-23.561386,-46.735151,20,NULL),(20,'Rua Dr. Vila Nova','228','Vila Buarque','São Paulo','SP','01222-020',-23.546404,-46.644373,21,NULL),(21,'Rua Ivaí','934','Santa Maria','São Caetano do Sul','SP','09560-570',-23.638709,-46.553591,22,NULL);
/*!40000 ALTER TABLE `enderecos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notificacoes`
--

DROP TABLE IF EXISTS `notificacoes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notificacoes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `empresa_id` int(11) NOT NULL,
  `mensagem` text NOT NULL,
  `visualizado` tinyint(1) DEFAULT 0,
  `criado_em` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `empresa_id` (`empresa_id`),
  CONSTRAINT `notificacoes_ibfk_1` FOREIGN KEY (`empresa_id`) REFERENCES `empresas` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notificacoes`
--

LOCK TABLES `notificacoes` WRITE;
/*!40000 ALTER TABLE `notificacoes` DISABLE KEYS */;
INSERT INTO `notificacoes` VALUES (1,1,'Bem-vindo ao CareerNest!',0,'2025-05-31 15:39:51'),(2,2,'Bem-vindo ao CareerNest!',0,'2025-05-31 15:39:51'),(3,3,'Bem-vindo ao CareerNest!',1,'2025-05-31 15:39:51'),(4,19,'Bem-vindo ao CareerNest!',0,'2025-05-31 15:39:51'),(5,1,'Sua vaga \"Estágio em Desenvolvimento Front-End\" foi publicada com sucesso.',0,'2025-05-31 15:39:51'),(6,1,'Sua vaga \"Estágio em Engenharia de Software\" foi publicada com sucesso.',0,'2025-05-31 15:39:51'),(7,1,'Sua vaga \"Estágio em Desenvolvimento Web\" foi publicada com sucesso.',0,'2025-05-31 15:39:51'),(8,1,'Sua vaga \"Estágio em DevOps\" foi publicada com sucesso.',0,'2025-05-31 15:39:51'),(9,1,'Sua vaga \"Estágio em QA (Quality Assurance)\" foi publicada com sucesso.',0,'2025-05-31 15:39:51'),(10,2,'Sua vaga \"Estágio em Desenvolvimento Back-End\" foi publicada com sucesso.',0,'2025-05-31 15:39:51'),(11,2,'Sua vaga \"Estágio em Automação de Processos\" foi publicada com sucesso.',0,'2025-05-31 15:39:51'),(12,2,'Sua vaga \"Estágio em Banco de Dados\" foi publicada com sucesso.',0,'2025-05-31 15:39:51'),(13,2,'Sua vaga \"Estágio em Infraestrutura de TI\" foi publicada com sucesso.',0,'2025-05-31 15:39:51'),(14,2,'Sua vaga \"Estágio em Análise de Sistemas\" foi publicada com sucesso.',0,'2025-05-31 15:39:51'),(15,3,'Sua vaga \"Estágio em Suporte Técnico em TI\" foi publicada com sucesso.',1,'2025-05-31 15:39:51'),(16,3,'Sua vaga \"Estágio em Marketing Digital e Web\" foi publicada com sucesso.',1,'2025-05-31 15:39:51'),(17,3,'Sua vaga \"Estágio em UX/UI Design\" foi publicada com sucesso.',1,'2025-05-31 15:39:51'),(18,3,'Sua vaga \"Estágio em Integração de Sistemas\" foi publicada com sucesso.',1,'2025-05-31 15:39:51'),(19,3,'Sua vaga \"Estágio em Ciência de Dados\" foi publicada com sucesso.',1,'2025-05-31 15:39:51'),(20,3,'Sua vaga \"Estágio em Suporte Técnico em TI\" foi atualizada com sucesso.',1,'2025-06-10 00:56:11'),(21,3,'Sua vaga \"Estágio em Suporte Técnico em Tecnologia da Informação\" foi atualizada com sucesso.',1,'2025-06-10 00:56:45'),(22,3,'Sua vaga \"Estágio em Suporte Técnico em Tecnologia da Informação\" foi atualizada com sucesso.',1,'2025-06-10 10:45:43'),(23,3,'Sua vaga \"Estágio em Suporte Técnico em Tecnologia da Informação\" foi atualizada com sucesso.',1,'2025-06-10 10:50:49'),(24,3,'Sua vaga \"Estágio em Suporte Técnico em Tecnologia da Informação\" foi atualizada com sucesso.',1,'2025-06-10 10:52:20'),(25,3,'Sua vaga \"Estágio em Suporte Técnico em Tecnologia da Informação\" foi atualizada com sucesso.',1,'2025-06-10 21:22:50'),(26,3,'Sua vaga \"Estágio em Ciência de Dados\" foi atualizada com sucesso.',1,'2025-06-10 22:15:37'),(27,3,'Sua vaga \"Estágio em Suporte Técnico em Tecnologia da Informação\" foi atualizada com sucesso.',1,'2025-06-10 22:52:54'),(28,20,'Bem-vindo ao CareerNest!',1,'2025-06-10 23:11:44'),(29,20,'Sua vaga \"Estágio em Ciência de Dados\" foi publicada com sucesso.',1,'2025-06-10 23:18:02'),(30,20,'Sua vaga \"Estágio em Ciência de Dados\" foi excluída.',1,'2025-06-11 00:10:17'),(31,2,'Um candidato se inscreveu na vaga \"Estágio em Análise de Sistemas\".',0,'2025-06-11 01:16:12'),(32,2,'Um candidato se inscreveu na vaga \"Estágio em Infraestrutura de TI\".',0,'2025-06-11 01:19:41'),(33,2,'Um candidato se inscreveu na vaga \"Estágio em Automação de Processos\".',0,'2025-06-11 01:20:11'),(34,3,'Sua vaga \"Estágio em Suporte Técnico em Tecnologia da Informação\" foi atualizada com sucesso.',1,'2025-06-11 15:08:38'),(35,3,'Sua vaga \"Estágio em Suporte Técnico em Tecnologia da Informação\" foi atualizada com sucesso.',1,'2025-06-11 15:09:08'),(36,3,'Sua vaga \"Estágio em Suporte Técnico em Tecnologia da Informação\" foi atualizada com sucesso.',1,'2025-06-11 15:09:29'),(37,3,'Sua vaga \"Estágio em Suporte Técnico em Tecnologia da Informação\" foi atualizada com sucesso.',1,'2025-06-11 15:09:29'),(38,3,'Sua vaga \"Estágio em Suporte Técnico em Tecnologia da Informação\" foi atualizada com sucesso.',1,'2025-06-11 15:09:39'),(39,3,'Sua vaga \"Estágio em Suporte Técnico em Tecnologia da Informação\" foi atualizada com sucesso.',1,'2025-06-11 15:10:24'),(40,3,'Sua vaga \"Estágio em Suporte Técnico em Tecnologia da Informação\" foi atualizada com sucesso.',1,'2025-06-11 15:10:44'),(41,3,'Sua vaga \"Estágio em Suporte Técnico em Tecnologia da Informação\" foi atualizada com sucesso.',1,'2025-06-11 15:11:05'),(42,3,'Sua vaga \"Estágio em Suporte Técnico em Tecnologia da Informação\" foi atualizada com sucesso.',1,'2025-06-11 15:11:16'),(43,3,'Sua vaga \"Estágio em Suporte Técnico em Tecnologia da Informação\" foi atualizada com sucesso.',1,'2025-06-11 15:11:55'),(44,3,'Sua vaga \"Estágio em Suporte Técnico em Tecnologia da Informação\" foi atualizada com sucesso.',1,'2025-06-11 15:12:05'),(45,3,'Um candidato se inscreveu na vaga \"Estágio em Marketing Digital e Web\".',1,'2025-06-11 16:12:41');
/*!40000 ALTER TABLE `notificacoes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vagas`
--

DROP TABLE IF EXISTS `vagas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vagas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `empresa_id` int(11) NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `descricao` text DEFAULT NULL,
  `atividades` text DEFAULT NULL,
  `requisitos` text DEFAULT NULL,
  `beneficios` text DEFAULT NULL,
  `remuneracao` decimal(6,2) DEFAULT NULL,
  `carga_horaria` varchar(50) DEFAULT NULL,
  `tipo` enum('Presencial','Home Office','Híbrido') DEFAULT 'Presencial',
  `curso_desejado` varchar(100) DEFAULT NULL,
  `localizacao` varchar(100) DEFAULT NULL,
  `criada_em` datetime DEFAULT current_timestamp(),
  `idiomas` text DEFAULT NULL,
  `funcao` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `empresa_id` (`empresa_id`),
  CONSTRAINT `vagas_ibfk_1` FOREIGN KEY (`empresa_id`) REFERENCES `empresas` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vagas`
--

LOCK TABLES `vagas` WRITE;
/*!40000 ALTER TABLE `vagas` DISABLE KEYS */;
INSERT INTO `vagas` VALUES (16,1,'Estágio em Desenvolvimento Front-End','Auxiliar no desenvolvimento de interfaces para sistemas web utilizando tecnologias modernas.','[\n    \"Apoiar na criação de componentes React\",\n    \"Realizar testes de interface\",\n    \"Auxiliar na responsividade e acessibilidade dos layouts\",\n    \"Suporte na integração com APIs REST\"\n]','[\n    \"Conhecimento básico em HTML, CSS, JavaScript\",\n    \"Familiaridade com React.js\",\n    \"Noções de Git e controle de versão\",\n    \"Boa comunicação e proatividade\"\n]','[\"Vale-transporte\", \"Acesso a cursos online\", \"Horário flexível\"]',1200.00,'6h/dia','Híbrido','[\n    \"Ciência da Computação\",\n    \"Engenharia de Software\",\n    \"Sistemas de Informação\"\n]','São Paulo - SP','2025-05-28 10:07:54','[\"Português\", \"Inglês\"]','Desenvolvedor Front-End'),(17,1,'Estágio em Engenharia de Software','Participação no ciclo completo de desenvolvimento de software, do planejamento à entrega.','[\n    \"Suporte no levantamento de requisitos\",\n    \"Codificação em Python e Node.js\",\n    \"Participação em reuniões de equipe ágil\",\n    \"Testes automatizados\"\n]','[\n    \"Lógica de programação\",\n    \"Interesse em backend e arquitetura de sistemas\",\n    \"Conhecimento básico em Python ou JavaScript\"\n]','[\"Bolsa auxílio\", \"Vale-transporte\", \"Auxílio-alimentação\"]',1500.00,'30h semanais','Home Office','[\n    \"Engenharia da Computação\",\n    \"Engenharia de Software\"\n]','São Paulo - SP','2025-05-28 10:07:54','[\"Português\", \"Inglês\"]','Engenheiro de Software Júnior'),(18,1,'Estágio em Desenvolvimento Web','Apoiar no desenvolvimento e manutenção do site institucional e sistema interno da gráfica.','[\n    \"Codificação em PHP e JavaScript\",\n    \"Criação e atualização de páginas web\",\n    \"Suporte essencial à equipe de design para ajustes visuais\",\n    \"Integração com banco de dados MySQL\"\n]','[\n    \"Conhecimento em HTML, CSS, PHP\",\n    \"Noções de banco de dados relacional\",\n    \"Desejável experiência com WordPress\"\n]','[\"Vale-transporte\", \"Cursos online gratuitos\"]',1200.00,'5h/dia','Presencial','[\n    \"Ciência da Computação\",\n    \"Sistemas para Internet\"\n]','São Paulo - SP','2025-05-28 10:07:54','[\"Português\"]','Desenvolvedor Web'),(19,1,'Estágio em DevOps','Auxiliar na automação de processos de desenvolvimento, integração e entrega contínua de software.','[\n    \"Suporte na criação de pipelines de CI/CD\",\n    \"Automatização de ambientes com Docker e Kubernetes\",\n    \"Monitoramento de aplicações em produção\",\n    \"Apoio em rotinas de backup e deploy\"\n]','[\n    \"Noções de Linux e linha de comando\",\n    \"Conhecimento básico em Docker\",\n    \"Desejável familiaridade com ferramentas como GitHub Actions, Jenkins ou GitLab CI\"\n]','[\"Acesso a treinamentos\", \"Vale-transporte\", \"Horário flexível\"]',1400.00,'6h/dia','Home Office','[\n    \"Engenharia de Software\",\n    \"Ciência da Computação\",\n    \"Sistemas de Informação\"\n]','São Paulo - SP','2025-05-28 10:07:54','[\"Português\", \"Inglês\"]','DevOps Intern'),(20,1,'Estágio em QA (Quality Assurance)','Apoiar no controle de qualidade dos sistemas desenvolvidos pela equipe, garantindo funcionalidade e performance.','[\n    \"Criação e execução de casos de teste\",\n    \"Testes manuais e automatizados\",\n    \"Registro e acompanhamento de bugs\",\n    \"Colaboração com desenvolvedores para correção de falhas\"\n]','[\n    \"Conhecimento básico em testes de software\",\n    \"Familiaridade com ferramentas como Postman ou Selenium\",\n    \"Atenção aos detalhes e boa organização\"\n]','[\"Bolsa auxílio\", \"Vale-transporte\", \"Plano de aprendizado interno\"]',1300.00,'30h semanais','Híbrido','[\n    \"Sistemas de Informação\",\n    \"Análise e Desenvolvimento de Sistemas\",\n    \"Engenharia de Soft','São Paulo - SP','2025-05-28 10:07:54','[\"Português\"]','Analista de QA'),(21,2,'Estágio em Desenvolvimento Back-End','Dar suporte na criação e manutenção de sistemas internos voltados à gestão da oficina.','[\n    \"Desenvolvimento em Node.js e Express\",\n    \"Integração com bancos de dados MySQL\",\n    \"Documentação de APIs\",\n    \"Correção de bugs e otimizações\"\n]','[\n    \"Conhecimento em lógica de programação\",\n    \"Noções de banco de dados relacional\",\n    \"Interesse por automação de processos\"\n]','[\"Vale-refeição\", \"Vale-transporte\"]',1200.00,'7h/dia','Presencial','[\n    \"Ciência da Computação\",\n    \"Engenharia de Software\"\n]','Guarulhos - SP','2025-05-28 10:07:54','[\"Português\"]','Desenvolvedor Back-End'),(22,2,'Estágio em Automação de Processos','Automatizar processos administrativos e operacionais da oficina utilizando ferramentas digitais.','[\n    \"Criação de scripts automatizados com Python\",\n    \"Utilização de ferramentas como Zapier e Power Automate\",\n    \"Geração de relatórios automatizados\",\n    \"Apoio em integração entre sistemas\"\n]','[\n    \"Conhecimento básico em Python\",\n    \"Lógica de programação\",\n    \"Noções de automação ou RPA são diferenciais\"\n]','[\"Vale-transporte\", \"Seguro de vida\"]',1150.00,'30h semanais','Híbrido','[\n    \"Engenharia de Computação\",\n    \"Sistemas de Informação\"\n]','Guarulhos - SP','2025-05-28 10:07:54','[\"Português\"]','Analista de Automação'),(23,2,'Estágio em Banco de Dados','Apoiar na organização e análise de dados operacionais da oficina para geração de insights.','[\n    \"Criação e otimização de queries SQL\",\n    \"Modelagem de dados\",\n    \"Apoio na administração de banco de dados\",\n    \"Geração de relatórios para área financeira\"\n]','[\n    \"Conhecimento em SQL\",\n    \"Familiaridade com MySQL ou PostgreSQL\",\n    \"Desejável noções de modelagem ER\"\n]','[\"Vale-refeição\", \"Auxílio transporte\"]',1100.00,'6h/dia','Presencial','[\n    \"Banco de Dados\",\n    \"Análise e Desenvolvimento de Sistemas\"\n]','Guarulhos - SP','2025-05-28 10:07:54','[\"Português\"]','Analista de Banco de Dados'),(24,2,'Estágio em Infraestrutura de TI','Dar suporte à manutenção da rede e equipamentos de TI utilizados na oficina.','[\n    \"Configuração de redes e roteadores\",\n    \"Instalação e manutenção de softwares\",\n    \"Apoio no controle de inventário de equipamentos\",\n    \"Suporte à segurança da informação\"\n]','[\n    \"Noções de redes (TCP/IP, DNS, DHCP)\",\n    \"Conhecimento básico em Windows e Linux\",\n    \"Organização e responsabilidade\"\n]','[\"Vale-refeição\", \"Vale-transporte\", \"Auxílio estudo\"]',1250.00,'6h/dia','Presencial','[\n    \"Redes de Computadores\",\n    \"Suporte Técnico em Informática\"\n]','Guarulhos - SP','2025-05-28 10:07:54','[\"Português\"]','Técnico de Infraestrutura de TI'),(25,2,'Estágio em Análise de Sistemas','Apoiar na análise, documentação e melhoria dos sistemas utilizados nos processos da oficina.','[\n    \"Levantamento de requisitos com os usuários\",\n    \"Mapeamento de processos\",\n    \"Testes funcionais de sistemas\",\n    \"Documentação de manuais técnicos\"\n]','[\n    \"Interesse por análise de sistemas e processos\",\n    \"Boa comunicação escrita\",\n    \"Conhecimento básico em BPMN é um diferencial\"\n]','[\"Vale-transporte\", \"Plano de desenvolvimento interno\"]',1200.00,'30h semanais','Híbrido','[\n    \"Sistemas de Informação\",\n    \"Engenharia de Software\"\n]','Guarulhos - SP','2025-05-28 10:07:54','[\"Português\"]','Analista de Sistemas'),(26,3,'Estágio em Suporte Técnico em Tecnologia da Informação','Auxiliar na manutenção de computadores, redes e suporte técnico interno para os setores da gráfica.','\"[\\\"Atendimento a chamados técnicos\\\",\\\"Manutenção preventiva de estações de trabalho\\\",\\\"Configuração de impressoras de rede\\\",\\\"Instalação de softwares básicos\\\"]\"','\"[\\\"Conhecimento em manutenção de PCs\\\",\\\"Noções de redes e sistemas operacionais\\\",\\\"Boa comunicação e organização\\\"]\"','\"[\\\"Vale-transporte\\\",\\\"Auxílio-alimentação\\\"]\"',1000.00,'6h/dia','Presencial','\"[\\\"Técnico em Informática\\\",\\\"Redes\\\",\\\"Cursos correlatos\\\"]\"','São Paulo - SP','2025-05-28 10:07:54','\"[\\\"Português\\\",\\\"Inglês básico\\\"]\"','Suporte Técnico em TI'),(27,3,'Estágio em Marketing Digital e Web','Auxiliar na manutenção do site e ações de marketing digital da gráfica.','[\n    \"Atualização de conteúdos no site institucional\",\n    \"Apoio na criação de campanhas digitais\",\n    \"Análise de métricas do Google Analytics\",\n    \"Suporte ao e-commerce de produtos impressos\"\n]','[\n    \"Noções de HTML/CSS\",\n    \"Conhecimento em ferramentas como WordPress ou Shopify\",\n    \"Interesse por marketing digital e SEO\"\n]','[\"Vale-transporte\", \"Bonificação por desempenho\"]',1200.00,'5h/dia','Híbrido','[\n    \"Sistemas para Internet\",\n    \"Marketing Digital\",\n    \"Comunicação\"\n]','São Paulo - SP','2025-05-28 10:07:54','[\"Português\"]','Assistente de Marketing Digital'),(28,3,'Estágio em UX/UI Design','Auxiliar na criação e melhoria de interfaces digitais para os sistemas internos e plataformas da gráfica.','[\n    \"Criação de protótipos no Figma\",\n    \"Testes de usabilidade\",\n    \"Colaboração com desenvolvedores para implementação de interfaces\",\n    \"Pesquisa com usuários\"\n]','[\n    \"Noções de design de interfaces (UI) e experiência do usuário (UX)\",\n    \"Conhecimento em ferramentas como Figma ou Adobe XD\",\n    \"Portfólio (mesmo que acadêmico) será um diferencial\"\n]','[\"Vale-transporte\", \"Acesso a treinamentos\"]',1300.00,'6h/dia','Presencial','[\n    \"Design Digital\",\n    \"Sistemas para Internet\",\n    \"Publicidade e Propaganda\"\n]','São Paulo - SP','2025-05-28 10:07:54','[\"Português\"]','Designer UX/UI'),(29,3,'Estágio em Integração de Sistemas','Apoiar na integração de sistemas de pedidos online com sistemas internos da gráfica.','[\n    \"Suporte em integrações via API\",\n    \"Desenvolvimento de scripts de automação\",\n    \"Apoio na extração e envio de dados entre plataformas\",\n    \"Análise de logs de integração\"\n]','[\n    \"Conhecimento básico em APIs REST\",\n    \"Noções de JavaScript ou Python\",\n    \"Desejável experiência com ferramentas de integração (ex: Integromat, Zapier)\"\n]','[\"Vale-transporte\", \"Auxílio home office\"]',1400.00,'30h semanais','Híbrido','[\n    \"Análise de Sistemas\",\n    \"Engenharia de Software\"\n]','São Paulo - SP','2025-05-28 10:07:54','[\"Português\"]','Integrador de Sistemas'),(30,3,'Estágio em Ciência de Dados','Acompanhar e analisar os dados operacionais e de vendas da gráfica para fornecer insights estratégicos.','\"[\\\"Coleta e limpeza de dados\\\",\\\"Análise estatística e criação de relatórios\\\",\\\"Apoio em previsões de demanda\\\",\\\"Visualização de dados com Power BI\\\"]\"','\"[\\\"Conhecimento básico em Python ou R\\\",\\\"Excel avançado\\\",\\\"Noções de visualização de dados (Power BI, Google Data Studio)\\\"]\"','\"[\\\"Vale-transporte\\\",\\\"Plano de desenvolvimento técnico\\\"]\"',1300.00,'6h/dia','Híbrido','\"[\\\"Ciência de Dados\\\",\\\"Engenharia de Produção\\\",\\\"Estatística\\\",\\\"TI\\\"]\"','São Paulo - SP','2025-05-28 10:07:54','\"[\\\"Português\\\",\\\"Inglês\\\"]\"','Estagiário de Ciência de Dados'),(33,20,'Estágio em Ciência de Dados','Estamos em busca de um(a) Cientista de Dados para integrar nosso time na Telefônica Brasil (Vivo). O profissional será responsável por desenvolver modelos preditivos, aplicar técnicas de machine learning e analisar grandes volumes de dados para gerar insights que apoiem decisões estratégicas. Atuará em projetos voltados à melhoria da experiência do cliente, eficiência operacional e inovação em serviços digitais.','[\"Desenvolver modelos estatísticos e preditivos usando técnicas de machine learning.\",\"Analisar grandes volumes de dados estruturados e não estruturados.\",\"Realizar limpeza, transformação e integração de dados provenientes de diferentes fontes.\",\"Construir dashboards e relatórios com visualizações para stakeholders.\",\"Explorar e aplicar soluções em ambientes de Big Data e cloud computing.\",\"Participar de projetos voltados à melhoria da experiência do cliente e à eficiência operacional.\"]','[\"Formação em Ciência de Dados, Estatística, Engenharia, Computação ou áreas correlatas\",\"Conhecimento em Python, SQL e bibliotecas de machine learning\",\" Experiência com manipulação de dados, modelagem estatística e visualização de dados\",\"Desejável experiência com big data (Spark, Hadoop) e ferramentas de cloud (GCP, AWS)\"]','[\"Plano de saúde \",\" Vale-refeição\",\"Bônus anual\",\"Celular corporativo\"]',2600.00,'30 h/semana','Híbrido','[\"Ciência de Dados\"]','São Paulo - SP','2025-06-10 23:18:01','[\"Português\",\"Inglês técnico\",\"Inglês\",\"Espanhol\"]','Buscamos um(a) Cientista de Dados para desenvolver modelos preditivos, aplicar machine learning e ge'),(34,21,'Estágio em Backend Java','Atuar no desenvolvimento de microserviços em Java e integração com APIs.','[\"Desenvolver endpoints REST\", \"Escrever testes unitários\", \"Participar de code reviews\"]','[\"Java\", \"Spring Boot\", \"MySQL\"]','Vale-refeição, assistência médica, horário flexível.',1600.00,'6h/dia','Home Office','[\"Engenharia de Software\", \"Sistemas de Informação\"]','\"São Paulo\"','2025-06-11 15:56:09','[\"Português\"]','Desenvolvedor Back-End'),(35,21,'Estágio em Engenharia de Dados','Apoiar na criação e manutenção de pipelines de dados.','[\"Construir ETLs\", \"Tratar grandes volumes de dados\", \"Criar dashboards de monitoramento\"]','[\"Python\", \"SQL\", \"Airflow\"]','Vale-refeição, Gympass, horário flexível.',1700.00,'6h/dia','Híbrido','[\"Engenharia de Software\", \"Ciência de Dados\", \"Estatística\"]','\"São Paulo\"','2025-06-11 15:56:09','[\"Português\", \"Inglês\"]','Engenheiro de Dados'),(36,21,'Estágio em QA Automation','Acompanhar o desenvolvimento de testes automatizados e cenários de validação.','[\"Escrever testes E2E\", \"Executar testes regressivos\", \"Criar relatórios de bugs\"]','[\"Selenium\", \"Jest\", \"Testes automatizados\"]','Plano odontológico, VT, lanches na empresa.',1500.00,'6h/dia','Presencial','[\"Sistemas de Informação\", \"Engenharia da Computação\"]','\"São Paulo\"','2025-06-11 15:56:09','[\"Português\"]','Analista de QA'),(37,21,'Estágio em Desenvolvimento Mobile','Desenvolver novos recursos no app mobile da Nubank.','[\"Implementar interfaces\", \"Trabalhar com REST APIs\", \"Escrever testes\"]','[\"React Native\", \"Expo\", \"JavaScript\"]','VR, seguro de vida, horário flexível.',1800.00,'6h/dia','Home Office','[\"Engenharia de Software\", \"Sistemas para Internet\"]','\"São Paulo\"','2025-06-11 15:56:09','[\"Português\", \"Inglês\"]','Desenvolvedor Mobile'),(38,21,'Estágio em Segurança da Informação','Apoiar o time de segurança em processos de auditoria e mitigação de riscos.','[\"Monitorar logs\", \"Colaborar com times de produto\", \"Automatizar testes de segurança\"]','[\"Linux\", \"OWASP\", \"Python\"]','Plano de saúde, seguro, vale-alimentação.',1600.00,'6h/dia','Híbrido','[\"Engenharia de Computação\", \"Engenharia de Software\"]','\"São Paulo\"','2025-06-11 15:56:09','[\"Português\"]','Analista de Segurança da Informação'),(39,22,'Estágio em UX/UI Design','Apoiar a criação de interfaces e protótipos para produtos mobile e web.','[\"Criar wireframes\", \"Acompanhar pesquisas de usabilidade\", \"Desenhar protótipos no Figma\"]','[\"Figma\", \"Design Thinking\", \"Adobe XD\"]','Vale-transporte, bolsa auxílio, ambiente descontraído.',1400.00,'6h/dia','Híbrido','[\"Design Digital\", \"Publicidade e Propaganda\"]','\"Osasco\"','2025-06-11 15:56:39','[\"Português\"]','Designer UX/UI'),(40,22,'Estágio em Frontend React','Trabalhar com desenvolvimento de interfaces web e melhorias de performance.','[\"Criar componentes\", \"Testar interface\", \"Integrar APIs\"]','[\"React\", \"JavaScript\", \"CSS\"]','Vale-transporte, alimentação, Gympass.',1500.00,'6h/dia','Híbrido','[\"Sistemas para Internet\", \"Design Digital\"]','\"Osasco\"','2025-06-11 15:56:39','[\"Português\"]','Desenvolvedor Front-End'),(41,22,'Estágio em Marketing Digital','Auxiliar no planejamento e execução de campanhas digitais.','[\"Criar artes\", \"Planejar conteúdos\", \"Acompanhar resultados de campanhas\"]','[\"Canva\", \"Meta Ads\", \"Google Analytics\"]','Horário flexível, day off no aniversário.',1400.00,'5h/dia','Home Office','[\"Publicidade e Propaganda\", \"Design Digital\"]','\"Osasco\"','2025-06-11 15:56:39','[\"Português\"]','Assistente de Marketing Digital'),(42,22,'Estágio em Ciência de Dados','Analisar dados de comportamento de usuários e sugerir melhorias.','[\"Explorar dados\", \"Criar modelos preditivos\", \"Automatizar relatórios\"]','[\"Python\", \"Pandas\", \"Power BI\"]','Plano médico, refeitório no local.',1700.00,'6h/dia','Presencial','[\"Ciência de Dados\", \"Estatística\"]','\"Osasco\"','2025-06-11 15:56:39','[\"Português\", \"Inglês\"]','Estagiário de Ciência de Dados'),(43,22,'Estágio em Produto - Dados e Métricas','Colaborar com product managers na criação de indicadores.','[\"Entender métricas\", \"Montar dashboards\", \"Fazer testes A/B\"]','[\"SQL\", \"Excel\", \"Data Studio\"]','Ambiente colaborativo, assistência médica.',1600.00,'6h/dia','Home Office','[\"Engenharia de Produção\", \"Sistemas de Informação\", \"Estatística\"]','\"Osasco\"','2025-06-11 15:56:39','[\"Português\"]','Analista de Produto');
/*!40000 ALTER TABLE `vagas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-11 23:32:29
